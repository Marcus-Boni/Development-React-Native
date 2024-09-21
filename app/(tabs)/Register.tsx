import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, Snackbar } from 'react-native-paper';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/services/firebase'; 

const RegisterScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setErrorMessage('As senhas não correspondem');
      setVisible(true);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setErrorMessage('Usuário registrado com sucesso!');
      setVisible(true);
    } catch (error) {
      setErrorMessage('Erro ao registrar. Verifique suas credenciais.');
      setVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        label="Senha"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        label="Confirme a Senha"
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleRegister} style={styles.button}>
        Registrar
      </Button>

      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={3000}
      >
        {errorMessage}
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

export default RegisterScreen;
