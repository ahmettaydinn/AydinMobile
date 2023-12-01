import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {similarWords} from '../data/similar';

const Profile = () => {
  const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [matchedWords, setMatchedWords] = useState([]);
  const haveFinished = matchedWords.length === similarWords.length;
  console.log('currentWord', currentWord);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'blue',
        flex: 1,
      }}>
      {similarWords.map(word => {
        const foundWord = matchedWords.find(wd => wd === word.word);
        console.log(currentWord === word.word);

        return (
          <View
            style={{
              flexDirection: 'row',
              gap: 20,
            }}>
            <View style={{width: '50%'}}>
              <Pressable
                onPress={() =>
                  setCurrentWord(currentWord === word.word ? '' : word.word)
                }>
                <View
                  style={{
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
                      currentWord === word.word || foundWord ? 'red' : 'white',
                  }}>
                  <Text>{word.word}</Text>
                </View>
              </Pressable>
            </View>

            {/*  */}
            <View style={{width: '50%'}}>
              <Pressable
                onPress={() => {
                  if (currentWord === word.word) {
                    const updatedMatchedWords = [...matchedWords];
                    updatedMatchedWords.push(word.word);
                    setMatchedWords(updatedMatchedWords);
                  } else {
                    return;
                  }
                }}>
                <View
                  style={{
                    borderWidth: 3,
                    padding: 20,
                    gap: 20,
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 10,
                    backgroundColor: foundWord ? 'red' : '',
                  }}>
                  <Text>{word.sentence}</Text>
                </View>
              </Pressable>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Profile;
