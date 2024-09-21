import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { auth } from '@/services/firebase';
import { signOut } from 'firebase/auth';

const HomeScreen: React.FC = () => {

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <View style={styles.container}>
      <Text>Bem-vindo(a)!</Text>
      <Button title="Sair" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HomeScreen;
