import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RadioButton as PaperRadioButton, Text } from 'react-native-paper';

type RadioButtonOption = {
  label: string;
  value: string;
};

type RadioButtonGroupProps = {
  options: RadioButtonOption[];
  selectedValue: string;
  onValueChange: (value: string) => void;
};

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  options,
  selectedValue,
  onValueChange
}) => {
  return (
    <View style={styles.container}>
      {options.map((option) => (
        <View key={option.value} style={styles.optionContainer}>
          <PaperRadioButton
            value={option.value}
            status={selectedValue === option.value ? 'checked' : 'unchecked'}
            onPress={() => onValueChange(option.value)}
          />
          <Text style={styles.label}>{option.label}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  label: {
    marginLeft: 8,
    fontSize: 16
  }
});

export default RadioButtonGroup;
