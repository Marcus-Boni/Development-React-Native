import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Snackbar } from 'react-native-paper';

type SnackbarComponentProps = {
  message: string;  
  duration?: number; 
}

const SnackbarComponent: React.FC<SnackbarComponentProps> = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = useState(false);

  const showSnackbar = () => setVisible(true);
  const hideSnackbar = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Button title="Mostrar Snackbar" onPress={showSnackbar} />
      <Snackbar
        visible={visible}
        onDismiss={hideSnackbar}
        duration={duration}
        action={{
          label: 'Fechar',
          onPress: () => {
            hideSnackbar();
          },
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
    alignItems: 'center',
  },
});

export default SnackbarComponent;
