import Card from '@/components/Card/Card';
import IconButton from '@/components/IconButton/IconButton';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Text, Appbar, Button } from 'react-native-paper';

const items = [
  {
    id: '1',
    title: 'Item 1',
    description: 'Descrição do Item 1',
    onPress: () => console.log('Item 1 Pressed')
  },
  {
    id: '2',
    title: 'Item 2',
    description: 'Descrição do Item 2',
    onPress: () => console.log('Item 2 Pressed')
  },
  {
    id: '3',
    title: 'Item 3',
    description: 'Descrição do Item 3'
  }
];

const options = [
  { label: 'Top 1', value: 'option1' },
  { label: 'Maneiro 2', value: 'option2' },
  { label: 'Legal 3', value: 'option3' }
];

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Home" />
      </Appbar.Header>

      <View style={styles.content}>
        <Text style={styles.title}>Home Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
    height: '100%',
    width: '100%'
  },
  card: {
    width: '100%',
    maxWidth: 400
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
  }
});

export default HomeScreen;
