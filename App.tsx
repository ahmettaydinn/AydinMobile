import React from 'react';
// import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimilarWords from './screens/SimilarWords';
import ChooseGame from './screens/ChooseGame';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {Icon} from '@gluestack-ui/themed';
import HowItWorks from './screens/HowItWorks';

const Tab = createBottomTabNavigator();
const GameStack = createNativeStackNavigator();

function GameStackScreen() {
  return (
    <GameStack.Navigator>
      <GameStack.Screen
        name="Games"
        component={ChooseGame}
        options={{
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

function HomeStackScreen() {
  return (
    <GameStack.Navigator>
      <GameStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <GameStack.Screen
        name="HowItWorks"
        component={HowItWorks}
        options={{
          headerShown: false,
        }}
      />
    </GameStack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{
          tabBarIcon: () => (
            // <Icon name="home-outline" color="#4F8EF7" size={24} />
            <Icon as={Ionicons} name="home-outline" size="xl" />
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="GamesStack"
        component={GameStackScreen}
        options={{
          tabBarIcon: () => (
            // <Icon name="game-controller-outline" color="#4F8EF7" size={24} />
            <Icon as={Ionicons} name="game-controller-outline" size="xl" />
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </GluestackUIProvider>
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
