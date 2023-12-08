import React, {useState} from 'react';
import {Alert, Modal, Pressable, Text, View} from 'react-native';

const Home = () => {
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  return (
    <>
      <View style={{padding: 20, flex: 1}}>
        <Text style={{fontSize: 36, textAlign: 'center'}}>
          Welcome to SimWords
        </Text>
        <View>
          <Pressable onPress={() => setInfoModalOpen(true)}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  borderWidth: 2,
                  marginTop: '50%',
                  fontSize: 24,
                }}>
                How the game works ?
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
      <Modal
        animationType="slide"
        visible={infoModalOpen}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setInfoModalOpen(!infoModalOpen);
        }}>
        <View
          style={{
            // justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <View style={{padding: 30}}>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
              unde adipisci similique, incidunt deserunt laborum eligendi
              dolorum nam dolore quam sequi temporibus id ea autem enim earum
              corporis, laboriosam ab, molestias maiores quasi quas voluptas!
              Quae, incidunt. Voluptas laboriosam sunt, libero veniam modi ex
              delectus tempore excepturi facere saepe reprehenderit eaque
              accusantium perspiciatis ut nisi facilis temporibus mollitia
              impedit vero! Similique dignissimos possimus sequi. Quis provident
              sint quisquam autem, ducimus nihil! Voluptatum, repellendus sunt
              nemo tempore vel repudiandae eius dicta ratione consequatur quas.
              Porro distinctio libero corporis numquam fugit, sed veniam
              similique, quas saepe accusamus eveniet culpa corrupti vel
              assumenda! Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Veritatis expedita iste dolorem odit quas amet recusandae
              ratione dicta molestiae. Eos modi unde non alias ea culpa totam
              voluptates odit sint error commodi adipisci magni, dolores cum.
              Molestiae odio quod voluptates eos dolor quisquam esse minima
              tenetur. Sint maiores corporis laborum.
            </Text>
            <Pressable
              onPress={() => setInfoModalOpen(!infoModalOpen)}
              style={{borderWidth: 2, marginTop: 30}}>
              <Text style={{textAlign: 'center'}}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Home;
