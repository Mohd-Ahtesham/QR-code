import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  ScrollView,
  Modal,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {Camera, FlashOff, FlashOn, Qrcode4} from '../Assests';
import Colors from '../Assests/ColorFormat';

const ScanScreen = () => {
  const [scanAgin, setScanAgain] = useState(false);
  const [set, setFlash] = useState(RNCamera.Constants.FlashMode.off);
  const [cameraflip, setCameraFlip] = useState('back');
  const [show, setShow] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  // eslint-disable-next-line space-infix-ops, prettier/prettier
  const rejex =
    '^((ftp|http|https)://)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(.[a-zA-Z]+)+((/)[w#]+)*(/w+?[a-zA-Z0-9_]+=w+(&[a-zA-Z0-9_]+=w+)*)?/?$';
  const onSuccess = () => {
    if (show.match(rejex)) {
      Linking.openURL(show).catch(err => console.error(err));
    }
  };

  const onWork = e => {
    setShow(e.data);
    setModalVisible(true);
  };
  const flip = () => {
    if (cameraflip === 'front') {
      setCameraFlip('back');
    } else {
      setCameraFlip('front');
    }
  };

  const pressed = () => {
    if (set === RNCamera.Constants.FlashMode.torch) {
      setFlash(RNCamera.Constants.FlashMode.off);
    } else {
      setFlash(RNCamera.Constants.FlashMode.torch);
    }
  };

  return (
    <ScrollView>
      <QRCodeScanner
        onRead={onWork}
        flashMode={set}
        showMarker={true}
        reactivate={scanAgin}
        cameraType={cameraflip}
        topViewStyle={styles.topcontainer}
        topContent={
          <Text>To scan the code please point your camera at the barcode.</Text>
        }
        bottomContent={
          <View style={styles.bottomcontainer}>
            <TouchableOpacity
              style={styles.icons}
              onPress={() => setScanAgain(true)}>
              <Qrcode4 />
              <Text>Scan again</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons} onPress={pressed}>
              <View>{set ? <FlashOff /> : <FlashOn />}</View>
              <Text>flash Mode</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons} onPress={flip}>
              <Camera />
              <Text>Flip camera</Text>
            </TouchableOpacity>
          </View>
        }
      />

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={onSuccess}>
              <Text style={styles.modalText}>{show}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  icons: {
    margin: 10,
    padding: 10,
    backgroundColor: Colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  topcontainer: {marginBottom: 50, paddingVertical: 50},
  bottomcontainer: {flexDirection: 'row', padding: 70},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default ScanScreen;
