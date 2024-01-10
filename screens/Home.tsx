import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';

import {HomeStackParamList, RootStackParamList} from '../App';

type HomeScreenNavigationProp = CompositeScreenProps<
  BottomTabScreenProps<HomeStackParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

const Home = ({navigation}: HomeScreenNavigationProp) => {
  const navigateToChooseGame = () => {
    navigation.navigate('GamesStack', {screen: 'Games'});
  };

  const navigateToHowItWorks = () => {
    navigation.navigate('HowItWorks');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToChooseGame}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Start Playing</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToHowItWorks}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>How The App Works</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  button: {
    padding: 15,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#008080',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Home;
