import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Snackbar } from 'react-native-paper';

type SnackbarComponentProps = {
  message: string;
  duration?: number;
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

const SnackbarComponent: React.FC<SnackbarComponentProps> = ({
  message,
  duration = 3000,
  visible,
  setVisible
}) => {
  return (
    <View style={styles.container}>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={duration}
        action={{
          label: 'Fechar'
        }}
      >
        {message}
      </Snackbar>
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

export default SnackbarComponent;
