import React, {Dispatch, SetStateAction} from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface IProps {
  isSimModalOpen: boolean;
  setIsSimModalOpen: Dispatch<SetStateAction<boolean>>;
}

const SimilarWordsInfoModal = ({isSimModalOpen, setIsSimModalOpen}: IProps) => {
  return (
    <Modal visible={isSimModalOpen} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text style={styles.heading}>Similar Words Game</Text>
        </View>
        <View style={styles.modalBody}>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            eaque minus id maiores! Quam eos a reprehenderit sit molestias illum
            cum dolorum velit doloremque consequuntur. Quos laudantium dolore
            fugit ducimus.
          </Text>
        </View>
        <View style={styles.modalFooter}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsSimModalOpen(false)}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeIcon: {
    fontSize: 16,
    color: 'blue',
  },
  modalBody: {
    padding: 10,
    marginBottom: 10,
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: '#009',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SimilarWordsInfoModal;
