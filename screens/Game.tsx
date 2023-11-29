import React, {useState} from 'react';
import {Text, View} from 'react-native';

const Profile = () => {
  const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
      }}>
      <View style={{borderWidth: 3, padding: 20}}>
        <View>
          <Text>Through</Text>
        </View>
        <View>
          <Text>Though</Text>
        </View>
        <View>
          <Text>Tough</Text>
        </View>

        <View>
          <Text>Thought</Text>
        </View>
        <View>
          <Text>Thorough</Text>
        </View>
      </View>
      {/*  */}
      <View style={{borderWidth: 3, padding: 20}}>
        <View>
          <Text>we passed _ the forest</Text>
        </View>
        <View>
          <Text>He is stupid, I like him _</Text>
        </View>
        <View>
          <Text>Wrestler girl is _</Text>
        </View>

        <View>
          <Text>I _ about your offer </Text>
        </View>
        <View>
          <Text>Everything is perfect. You plan was _</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
