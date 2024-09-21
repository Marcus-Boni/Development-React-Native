import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';
import { getDatabase, ref, get, set } from 'firebase/database';
import { updateEmail } from 'firebase/auth';
import { auth } from '@/services/firebase'; 

const Perfil: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const user = auth.currentUser; 

  useEffect(() => {
    const loadUserData = async () => {
      if (user) {
        const db = getDatabase();
        const userRef = ref(db, `users/${user.uid}`);
        const snapshot = await get(userRef);
        const userData = snapshot.val();

        if (userData) {
          setName(userData.name || '');
          setEmail(user.email || '');
        }
      }
    };

    loadUserData();
  }, [user]);

  const handleSaveChanges = async () => {
    if (!user) return;

    setLoading(true);

    try {
      if (email !== user.email) {
        await updateEmail(user, email);
      }

      const db = getDatabase();
      await set(ref(db, `users/${user.uid}`), {
        name,
        email,
      });

      setMessage('Perfil atualizado com sucesso!');
      setVisible(true);
    } catch (error) {
      setMessage('Erro ao atualizar o perfil.');
      setVisible(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Nome"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button
        mode="contained"
        onPress={handleSaveChanges}
        loading={loading}
        disabled={loading}
        style={styles.button}
      >
        Salvar Alterações
      </Button>

      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={3000}
      >
        {message}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default Perfil;
