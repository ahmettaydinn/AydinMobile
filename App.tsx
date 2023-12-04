import React from 'react';
// import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import GameScreen from './screens/Game';
import Icon from 'react-native-vector-icons/Ionicons';
import SimilarWords from './screens/SimilarWords';
import ChooseGame from './screens/ChooseGame';

const Tab = createBottomTabNavigator();
const GameStack = createNativeStackNavigator();

function GameStackScreen() {
  return (
    <GameStack.Navigator>
      <GameStack.Screen
        name="Games"
        component={ChooseGame}
        options={{
          tabBarIcon: () => (
            <Icon name="game-controller-outline" color="#4F8EF7" size={24} />
          ),
          headerShown: false,
        }}
      />
      <GameStack.Screen
        name="SimilarWords"
        component={SimilarWords}
        // options={{tabBarLabel: 'Game!'}}
      />
    </GameStack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="home-outline" color="#4F8EF7" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Games"
        component={GameStackScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="game-controller-outline" color="#4F8EF7" size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
