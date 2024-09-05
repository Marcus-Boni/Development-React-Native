import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton as PaperIconButton, Text } from 'react-native-paper';

type IconButtonProps = {
  icon: string; 
  label?: string; 
  onPress: () => void; 
  size?: number; 
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  onPress,
  size = 24,
}) => {
  return (
    <View style={styles.container}>
      <PaperIconButton
        icon={icon}
        onPress={onPress}
        size={size}
        style={styles.iconButton}
      />
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  iconButton: {
    margin: 8,
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    color: '#333',
  },
});

export default IconButton;
