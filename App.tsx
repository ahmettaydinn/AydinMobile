import * as React from 'react';

import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/Home';
import SimilarWords from './screens/SimilarWords';
import ChooseGame from './screens/ChooseGame';
import HowItWorks from './screens/HowItWorks';

export type GameStackParamList = {
  Games: undefined;
  SimilarWords: undefined;
};

const GameStack = createNativeStackNavigator<GameStackParamList>();

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
      <GameStack.Screen name="SimilarWords" component={SimilarWords} />
    </GameStack.Navigator>
  );
}

export type HomeStackParamList = {
  Home: undefined;
  HowItWorks: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="HowItWorks"
        component={HowItWorks}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}

export type RootStackParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  GamesStack: NavigatorScreenParams<GameStackParamList>;
};

const Tab = createBottomTabNavigator();

const homeStackOptions = {
  tabBarIcon: () => <Ionicons name="home-outline" size={24} />,
  headerShown: false,
  tabBarShowLabel: false,
};

const gameStackOptions = {
  tabBarIcon: () => <Ionicons name="game-controller-outline" size={24} />,
  headerShown: false,
  tabBarShowLabel: false,
};

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={homeStackOptions}
      />
      <Tab.Screen
        name="GamesStack"
        component={GameStackScreen}
        options={gameStackOptions}
      />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;
