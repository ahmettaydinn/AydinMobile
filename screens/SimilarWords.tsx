import React, {useState} from 'react';
import {similarWords} from '../data/similar';
import {useNavigation} from '@react-navigation/native';
import {Box, ButtonText, Pressable, Text} from '@gluestack-ui/themed';
import {Button} from '@gluestack-ui/themed';

const SimilarWords = () => {
  const navigation = useNavigation();

  // const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [matchedWords, setMatchedWords] = useState([]);
  const [part, setPart] = useState(0);
  const haveFinished =
    matchedWords.length === similarWords[part].answers.length;

  return (
    <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 20,
      }}>
      <Text size="4xl" sx={{marginBottom: 30}}>
        {matchedWords.length}/{similarWords[part].answers.length}
      </Text>

      <Box
        sx={{
          flexDirection: 'row',
          gap: 20,
          flex: 1,
        }}>
        <Box sx={{width: '50%'}}>
          {similarWords[part].answers.map(answer => {
            const foundWord = matchedWords.find(wd => wd === answer);
            return (
              <Pressable
                onPress={() =>
                  setCurrentWord(currentWord === answer ? '' : answer)
                }>
                <Box
                  sx={{
                    borderWidth: 3,
                    // padding: 20,
                    gap: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 120,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 10,
                    backgroundColor:
                      currentWord === answer || foundWord
                        ? '$pink600'
                        : 'white',
                  }}>
                  <Text
                    color={
                      currentWord === answer || foundWord ? 'white' : 'black'
                    }>
                    {answer}
                  </Text>
                </Box>
              </Pressable>
            );
          })}
        </Box>

        {/*  */}
        <Box sx={{width: '50%'}}>
          {similarWords[part].sentences.map(sentenceObj => {
            const foundWord = matchedWords.find(
              wd => wd === sentenceObj.answer,
            );
            return (
              <Pressable
                onPress={() => {
                  if (currentWord === sentenceObj.answer) {
                    if (!matchedWords.includes(sentenceObj.answer)) {
                      const updatedMatchedWords = [...matchedWords];
                      updatedMatchedWords.push(sentenceObj.answer);
                      setMatchedWords(updatedMatchedWords);
                    }
                  } else {
                    return;
                  }
                }}>
                <Box
                  sx={{
                    borderWidth: 3,
                    padding: 10,
                    gap: 20,
                    height: 120,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 10,
                    backgroundColor: foundWord ? '$pink600' : 'white',
                  }}>
                  <Text color={foundWord ? 'white' : 'black'}>
                    {sentenceObj.sentence}
                  </Text>
                </Box>
              </Pressable>
            );
          })}
        </Box>
      </Box>

      {similarWords.length - 1 !== part ? (
        <Button
          bg="$darkBlue800"
          disabled={!haveFinished}
          onPress={() => {
            if (haveFinished) {
              setMatchedWords([]);
              setCurrentWord('');
              setPart(part + 1);
            }
          }}>
          <ButtonText> Next </ButtonText>
        </Button>
      ) : (
        <Button
          bg="$darkBlue800"
          disabled={!haveFinished}
          onPress={() => {
            if (haveFinished) {
              navigation.goBack();
            }
          }}>
          <ButtonText> End </ButtonText>
        </Button>
      )}
    </Box>
  );
};

export default SimilarWords;
