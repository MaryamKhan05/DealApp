import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  Button,
  ImageBackground,
  FlatList,
} from 'react-native';
import Colors from '../../services/constants/colors';
import Modal from 'react-native-modal';

const ModalScreen = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.blue}}>
      {/* <Button
        style={{marginBottom: 20}}
        title="Show modal"
        onPress={toggleModal}
      /> */}

      <Modal isVisible={isModalVisible}>
        <View
          style={{
            height: '85%',
            width: '97%',
            backgroundColor: Colors.white,
            borderRadius: 8,
          }}>
          <ImageBackground
            source={require('../../assets/images/modal.png')}
            style={{
              width: '100%',
              height: '65%',
              alignSelf: 'center',
              borderRadius: 8,
            }}>
            {/* <Button title="Hide modal" onPress={toggleModal} /> */}
          </ImageBackground>
          <View>
            <FlatList />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

//make this component available to the app
export default ModalScreen;
