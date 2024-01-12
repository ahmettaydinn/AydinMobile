import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {similarWords} from '../data/similar';

const SimilarWords = () => {
  const navigation = useNavigation();

  const [currentWord, setCurrentWord] = useState('');
  const [matchedWords, setMatchedWords] = useState<string[]>([]);
  const [part, setPart] = useState(0);
  const haveFinished =
    matchedWords.length === similarWords[part].answers.length;

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>
        {matchedWords.length}/{similarWords[part].answers.length}
      </Text>

      <View style={styles.row}>
        <View style={styles.column}>
          {similarWords[part].answers.map(answer => {
            const foundWord = matchedWords.find(wd => wd === answer);
            return (
              <TouchableOpacity
                onPress={() =>
                  setCurrentWord(currentWord === answer ? '' : answer)
                }
                key={answer}>
                <View
                  style={[
                    styles.box,
                    {
                      backgroundColor:
                        currentWord === answer || foundWord
                          ? '#FF69B4'
                          : 'white',
                    },
                  ]}>
                  <Text
                    style={{
                      color:
                        currentWord === answer || foundWord ? 'white' : 'black',
                    }}>
                    {answer}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.column}>
          {similarWords[part].sentences.map(sentenceObj => {
            const foundWord = matchedWords.find(
              wd => wd === sentenceObj.answer,
            );
            return (
              <TouchableOpacity
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
                }}
                key={sentenceObj.sentence}>
                <View
                  style={[
                    styles.box,
                    {
                      backgroundColor: foundWord ? '#FF69B4' : 'white',
                    },
                  ]}>
                  <Text style={{color: foundWord ? 'white' : 'black'}}>
                    {sentenceObj.sentence}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {similarWords.length - 1 !== part ? (
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#001f3f'}]}
          disabled={!haveFinished}
          onPress={() => {
            if (haveFinished) {
              setMatchedWords([]);
              setCurrentWord('');
              setPart(part + 1);
            }
          }}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#001f3f'}]}
          disabled={!haveFinished}
          onPress={() => {
            if (haveFinished) {
              navigation.goBack();
            }
          }}>
          <Text style={styles.buttonText}>End</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  counter: {
    fontSize: 30,
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  column: {
    width: '50%',
  },
  box: {
    borderWidth: 3,
    padding: 10,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    padding: 15,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001f3f',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default SimilarWords;
