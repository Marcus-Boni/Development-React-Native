import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

const LoginScreen: React.FC = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/');
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>
        Login
      </Text>
      <TextInput
        label="Email"
        mode="outlined"
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        mode="outlined"
        style={styles.input}
        secureTextEntry
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#3dbefa'
  },
  title: {
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    marginBottom: 12,
    borderRadius: 4,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 4,
    height: 48,
    fontSize: 16,
    color: 'black'
  },
  button: {
    marginTop: 16
  }
});

export default LoginScreen;
