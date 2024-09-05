import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Surface } from 'react-native-paper';

const ForgotPassword: React.FC = () => {
  return (
    <Surface style={styles.container}>
      <Text style={styles.title}>Esqueci Minha Senha</Text>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default ForgotPassword;
