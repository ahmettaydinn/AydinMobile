import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import SimilarWordsInfoModal from '../components/SimilarWords/modals/similarWordsInfoModal';

const HowItWorks = () => {
  const [isSimModalOpen, setIsSimModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsSimModalOpen(true)}>
        <View style={styles.box}>
          <Text style={styles.text}>Similar Words</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.box}>
        <Text style={styles.text}>This is the Box</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>This is the Box</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>This is the Box</Text>
      </View>

      <SimilarWordsInfoModal
        isSimModalOpen={isSimModalOpen}
        setIsSimModalOpen={setIsSimModalOpen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  box: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: '#001f3f',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default HowItWorks;
