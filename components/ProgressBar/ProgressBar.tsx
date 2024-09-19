import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ProgressBar as PaperProgressBar } from 'react-native-paper';

type ProgressBarProps = {
  progress: number; 
  color?: string;   
  label?: string;  
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color, label }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <PaperProgressBar progress={progress} color={color} style={styles.progressBar} />
      <Text style={styles.percentage}>{Math.round(progress * 100)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressBar: {
    width: '100%',
    maxWidth: 400,
    height: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  percentage: {
    fontSize: 14,
    color: '#333',
  },
});

export default ProgressBar;
