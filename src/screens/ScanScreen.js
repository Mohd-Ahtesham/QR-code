import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {Camera, FlashOff, FlashOn, Qrcode4} from '../Assests';
import Colors from '../Assests/ColorFormat';

const ScanScreen = () => {
  const [scanAgin, setScanAgain] = useState(true);
  const [set, setFlash] = useState(RNCamera.Constants.FlashMode.off);
  const [cameraflip, setCameraFlip] = useState('back');

  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
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
        onRead={onSuccess}
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
});
export default ScanScreen;
