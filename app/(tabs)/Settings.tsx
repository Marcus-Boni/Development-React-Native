import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useThemeContext } from '@/context/ThemeContext';

const Settings: React.FC = () => {
  const { theme, setTheme } = useThemeContext();

  const handleThemeChange = async (newTheme: string) => {
    const theme = newTheme as 'light' | 'dark' | 'system';
    setTheme(theme);
    await AsyncStorage.setItem('theme', theme); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha o Tema</Text>
      <RadioButton.Group onValueChange={handleThemeChange} value={theme}>
        <RadioButton.Item label="Padrão do Sistema" value="system" />
        <RadioButton.Item label="Claro" value="light" />
        <RadioButton.Item label="Escuro" value="dark" />
      </RadioButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    marginBottom: 20
  }
});

export default Settings;
