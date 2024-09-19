import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FAB } from 'react-native-paper';

type FABComponentProps = {
  icon: string;
  onPress?: () => void;
  label?: string;
  color?: string;
  style?: object;
};

const FABComponent: React.FC<FABComponentProps> = ({
  icon,
  onPress,
  label,
  color,
  style
}) => {
  return (
    <View style={[styles.container, style]}>
      <FAB
        icon={icon}
        onPress={onPress}
        label={label}
        color={color || 'white'}
        style={styles.fab}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    zIndex: 1
  },
  fab: {
    backgroundColor: '#6200ea'
  }
});

export default FABComponent;
