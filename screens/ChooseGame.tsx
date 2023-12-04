import {useNavigation} from '@react-navigation/native';
import {Pressable, Text, View} from 'react-native';

const ChooseGame = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          borderWidth: 2,
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: '50%',
          alignItems: 'center',
        }}>
        <View>
          <Pressable
            style={{borderWidth: 2, padding: 30}}
            onPress={() => {
              navigation.navigate('SimilarWords');
            }}>
            <Text>Similar Words</Text>
          </Pressable>
        </View>
        <View>
          <Text>Game 2</Text>
        </View>
      </View>
      {/* ----------------------------------- */}
      <View
        style={{
          width: '100%',
          borderWidth: 2,
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: '50%',
          alignItems: 'center',
        }}>
        <View>
          <Text>Game 3</Text>
        </View>
        <View>
          <Text>Game 4</Text>
        </View>
      </View>
    </View>
  );
};

export default ChooseGame;
