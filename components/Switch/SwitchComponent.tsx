import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Switch, Text } from 'react-native-paper';

interface SwitchComponentProps {
  label?: string;        
  initialValue?: boolean;
  onToggle?: (value: boolean) => void; 
}

const SwitchComponent: React.FC<SwitchComponentProps> = ({ label, initialValue = false, onToggle }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(initialValue);

  const handleToggle = () => {
    setIsSwitchOn(!isSwitchOn);
    if (onToggle) {
      onToggle(!isSwitchOn); 
    }
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <Switch value={isSwitchOn} onValueChange={handleToggle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  label: {
    marginRight: 10,
    fontSize: 16,
  },
});

export default SwitchComponent;
