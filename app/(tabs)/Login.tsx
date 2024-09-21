import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/services/firebase';
import SnackbarComponent from '@/components/Snackbar/SnackbarComponent';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setErrorMessage('Logado com sucesso!');
      setVisible(true);
    } catch (error) {
      setErrorMessage('Falha no login. Verifique suas credenciais.');
      setVisible(true);
    }
  };

  // Login: admin@teste.com
  // Senha: 123456

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        label="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Text
        style={styles.forgotPassword}
      >
        Esqueci minha senha
      </Text>
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Entrar
      </Button>

      <SnackbarComponent
        duration={3000}
        message={errorMessage}
        visible={visible}
        setVisible={setVisible}
      />
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
  },
  forgotPassword: {
    marginTop: 16,
    color: 'blue',
    textAlign: 'center',
    textDecorationLine: 'underline'
  }
});

export default LoginScreen;
