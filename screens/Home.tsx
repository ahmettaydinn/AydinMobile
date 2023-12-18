import React from 'react';
import {Box, Center, Pressable, Text} from '@gluestack-ui/themed';
// import {useNavigation} from '@react-navigation/native';
import {HomeStackParamList, RootStackParamList} from '../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';

type HomeScreenNavigationProp = CompositeScreenProps<
  BottomTabScreenProps<HomeStackParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

const Home = ({navigation}: HomeScreenNavigationProp) => {
  // const navigation = useNavigation();
  const navigateToChooseGame = () => {
    navigation.navigate('GamesStack', {screen: 'Games'});
  };
  const navigateToHowItWorks = () => {
    navigation.navigate('HowItWorks');
  };
  return (
    <Center sx={{flex: 1}} bg="backgroundLight200">
      <Pressable onPress={navigateToChooseGame}>
        <Box bg="$teal500" p="$5" w={200} mb={5}>
          <Text color="white" sx={{textAlign: 'center'}}>
            Start Playing
          </Text>
        </Box>
      </Pressable>
      {/*  */}
      <Pressable onPress={navigateToHowItWorks}>
        <Box bg="$teal500" p="$5" w={200} mt={5}>
          <Text color="white" sx={{textAlign: 'center'}}>
            How The App Works
          </Text>
        </Box>
      </Pressable>
    </Center>
  );
};

export default Home;
