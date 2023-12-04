import React, {useState} from 'react';
import {Button, Pressable, SafeAreaView, Text, View} from 'react-native';
import {similarWords} from '../data/similar';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [matchedWords, setMatchedWords] = useState([]);
  const haveFinished = matchedWords.length === similarWords.length;
  const [part, setPart] = useState(0);

  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'blue',
        flex: 1,
        padding: 20,
      }}>
      <Text style={{fontSize: 36, marginBottom: 30}}>
        {matchedWords.length}/4
      </Text>
      {similarWords[part].map(word => {
        const foundWord = matchedWords.find(wd => wd === word.word);

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
                    if (!matchedWords.includes(word.word)) {
                      const updatedMatchedWords = [...matchedWords];
                      updatedMatchedWords.push(word.word);
                      setMatchedWords(updatedMatchedWords);
                    }
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
                    backgroundColor: foundWord ? 'red' : 'white',
                  }}>
                  <Text>{word.sentence}</Text>
                </View>
              </Pressable>
            </View>
          </View>
        );
      })}
      {similarWords.length - 1 === part ? (
        <Button
          title="Next"
          disabled={!haveFinished}
          onPress={() => {
            if (haveFinished) {
              setMatchedWords([]);
              setCurrentWord('');
              setPart(part + 1);
            }
          }}
        />
      ) : (
        <Button
          disabled={!haveFinished}
          title="End"
          onPress={() => {
            if (haveFinished) {
              navigation.goBack();
            }
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default Profile;
