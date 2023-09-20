import React, {Component, useState} from 'react';

import {
  View,
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const ScanScreen = () => {
  const [scanAgin, setScanAgain] = useState(false);
  const [set, setFlash] = useState(RNCamera.Constants.FlashMode.torch);
  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };

  return (
    <ScrollView style={{flex: 1}}>
      <QRCodeScanner
        style={{flex: 1}}
        onRead={onSuccess}
        flashMode={set}
        reactivate={scanAgin}
        bottomContent={
          <View>
            <TouchableOpacity
              style={styles.buttonTouchable}
              onPress={() => setScanAgain(true)}>
              <Text style={styles.buttonText}>Scan again</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonTouchable}
              onPress={() => setFlash(RNCamera.Constants.FlashMode.off)}>
              <Text style={styles.buttonText}>Flash Off</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
export default ScanScreen;
