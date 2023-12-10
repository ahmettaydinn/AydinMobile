import {Box, Center, Pressable, Text} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

const ChooseGame = () => {
  const navigation = useNavigation();

  const navigateSimilarWords = () => {
    navigation.navigate('SimilarWords');
  };
  return (
    <Center sx={{flex: 1}}>
      <Box>
        <Box sx={{flexDirection: 'row'}}>
          <Pressable
            onPress={navigateSimilarWords}
            bg="$pink600"
            sx={{
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            p={20}
            m={5}
            w={150}
            h={120}>
            <Text color="white">Similar Words</Text>
          </Pressable>
          <Pressable
            sx={{
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            p={20}
            m={5}
            w={150}
            h={120}>
            <Text>Game 2</Text>
          </Pressable>
        </Box>
        <Box sx={{flexDirection: 'row'}}>
          <Pressable
            sx={{
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            p={20}
            m={5}
            w={150}
            h={120}>
            <Text>Game 3</Text>
          </Pressable>
          <Pressable
            sx={{
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            p={20}
            m={5}
            w={150}
            h={120}>
            <Text>Game 4</Text>
          </Pressable>
        </Box>
      </Box>
    </Center>
  );
};

export default ChooseGame;
