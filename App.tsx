//sgamzeo
// team member: Ahmet

import * as React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimilarWords from './screens/SimilarWords';
import ChooseGame from './screens/ChooseGame';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import HowItWorks from './screens/HowItWorks';
// import type {NativeStackScreenProps} from '@react-navigation/native-stack';

// https://javascript.plainenglish.io/react-navigation-v6-with-typescript-5c9c065d45a5
// https://javascript.plainenglish.io/react-navigation-v6-with-typescript-nested-navigation-part-2-87844f643e37

export type GameStackParamList = {
  Games: undefined;
  SimilarWords: undefined;
};

const GameStack = createNativeStackNavigator<GameStackParamList>();

// const gamesRoutes: Array<React.ComponentProps<typeof GameStack.Screen>> = [
//   {
//     name: 'Games',
//     component: ChooseGame,
//   },
//   {
//     name: 'SimilarWords',
//     component: SimilarWords,
//   },
// ];

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

// -------------------------------------------------------------------

export type HomeStackParamList = {
  Home: undefined;
  HowItWorks: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

// const homeRoutes: Array<React.ComponentProps<typeof HomeStack.Screen>> = [
//   {
//     name: 'Home',
//     component: HomeScreen,
//   },
//   {
//     name: 'HowItWorks',
//     component: HowItWorks,
//   },
// ];

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

// -------------------------------------------------------------
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

function App(): JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

export default App;
