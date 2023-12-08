import {useNavigation} from '@react-navigation/native';
import {Pressable, Text, View} from 'react-native';

const ChooseGame = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 30, textAlign: 'center', marginTop: 20}}>
        Choose Game
      </Text>
      <View
        style={{
          width: '100%',
          // borderWidth: 2,
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: '50%',
          alignItems: 'center',
        }}>
        <View style={{borderWidth: 2, padding: 30, width: '40%'}}>
          <Pressable
            onPress={() => {
              navigation.navigate('SimilarWords');
            }}>
            <Text>Similar Words</Text>
          </Pressable>
        </View>
        <View style={{borderWidth: 2, padding: 30, width: '40%'}}>
          <Text style={{textAlign: 'center'}}>Game 3</Text>
        </View>
      </View>
      {/* ----------------------------------- */}
      <View
        style={{
          width: '100%',
          // borderWidth: 2,
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: '50%',
          alignItems: 'center',
        }}>
        <View style={{borderWidth: 2, padding: 30, width: '40%'}}>
          <Text style={{textAlign: 'center'}}>Game 3</Text>
        </View>
        <View style={{borderWidth: 2, padding: 30, width: '40%'}}>
          <Text style={{textAlign: 'center'}}>Game 3</Text>
        </View>
      </View>
    </View>
  );
};

export default ChooseGame;
