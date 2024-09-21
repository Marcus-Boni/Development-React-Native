import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

interface ConfirmDialogProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ visible, onConfirm, onCancel }) => {
  return (
    <Modal transparent={true} visible={visible}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Confirmação</Text>
          <Text>Você tem certeza que deseja remover este item?</Text>
          <View style={styles.buttonContainer}>
            <Button title="Cancelar" onPress={onCancel} color={'red'} />
            <Button title="Deletar" onPress={onConfirm} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
});

export default ConfirmDialog;
