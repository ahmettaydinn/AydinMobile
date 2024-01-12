import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {GameStackParamList} from '../App';

type Props = NativeStackScreenProps<GameStackParamList, 'Games', 'GamesStack'>;

const ChooseGame = ({navigation}: Props) => {
  const navigateSimilarWords = () => {
    navigation.navigate('SimilarWords');
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={navigateSimilarWords}
          style={[styles.button, {backgroundColor: '#FF69B4'}]}>
          <Text style={styles.buttonText}>Similar Words</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Game 2</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Game 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Game 4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 5,
    width: 150,
    height: 120,
  },
  buttonText: {
    color: 'white',
  },
});

export default ChooseGame;
