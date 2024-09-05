import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Surface } from 'react-native-paper';

const Dashboard: React.FC = () => {
  return (
    <Surface style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  title: {
    fontSize: 24,
    marginBottom: 16
  }
});

export default Dashboard;
