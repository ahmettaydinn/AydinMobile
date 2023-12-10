import React, {useState} from 'react';
import {similarWords} from '../data/similar';
import {useNavigation} from '@react-navigation/native';
import {Box, Pressable, Text} from '@gluestack-ui/themed';
import {Button} from '@gluestack-ui/themed';
const Profile = () => {
  const navigation = useNavigation();

  // const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [matchedWords, setMatchedWords] = useState([]);
  const haveFinished = matchedWords.length === similarWords.length;
  const [part, setPart] = useState(0);

  return (
    <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'blue',
        flex: 1,
        padding: 20,
      }}>
      <Text sx={{fontSize: 36, marginBottom: 30}}>{matchedWords.length}/4</Text>
      {similarWords[part].map(word => {
        const foundWord = matchedWords.find(wd => wd === word.word);

        return (
          <Box
            sx={{
              flexDirection: 'row',
              gap: 20,
            }}>
            <Box sx={{width: '50%'}}>
              <Pressable
                onPress={() =>
                  setCurrentWord(currentWord === word.word ? '' : word.word)
                }>
                <Box
                  sx={{
                    borderWidth: 3,
                    padding: 20,
                    gap: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 10,
                    backgroundColor:
                      currentWord === word.word || foundWord
                        ? '$pink600'
                        : 'white',
                  }}>
                  <Text>{word.word}</Text>
                </Box>
              </Pressable>
            </Box>

            {/*  */}
            <Box sx={{width: '50%'}}>
              <Pressable
                onPress={() => {
                  if (currentWord === word.word) {
                    if (!matchedWords.includes(word.word)) {
                      const updatedMatchedWords = [...matchedWords];
                      updatedMatchedWords.push(word.word);
                      setMatchedWords(updatedMatchedWords);
                    }
                  } else {
                    return;
                  }
                }}>
                <Box
                  sx={{
                    borderWidth: 3,
                    padding: 20,
                    gap: 20,
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 10,
                    backgroundColor: foundWord ? '$pink600' : 'white',
                  }}>
                  <Text>{word.sentence}</Text>
                </Box>
              </Pressable>
            </Box>
          </Box>
        );
      })}
      {similarWords.length - 1 === part ? (
        <Button
          disabled={!haveFinished}
          onPress={() => {
            if (haveFinished) {
              setMatchedWords([]);
              setCurrentWord('');
              setPart(part + 1);
            }
          }}>
          Next
        </Button>
      ) : (
        <Button
          disabled={!haveFinished}
          onPress={() => {
            if (haveFinished) {
              navigation.goBack();
            }
          }}>
          End
        </Button>
      )}
    </Box>
  );
};

export default Profile;
