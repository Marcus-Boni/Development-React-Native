// screens/ForgotPasswordScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, Snackbar } from 'react-native-paper';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/services/firebase';

const ForgotPasswordScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const handlePasswordReset = async () => {
    if (!email) {
      setMessage('Por favor, insira um e-mail.');
      setVisible(true);
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Um link para redefinir sua senha foi enviado para o e-mail.');
      setVisible(true);
    } catch (error) {
      setMessage('Erro ao enviar o e-mail. Verifique o endereço de e-mail.');
      setVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Button
        mode="contained"
        onPress={handlePasswordReset}
        style={styles.button}
      >
        Enviar link de redefinição
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
    padding: 20
  },
  input: {
    marginBottom: 16
  },
  button: {
    marginTop: 16
  }
});

export default ForgotPasswordScreen;
