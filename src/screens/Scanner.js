/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {BarCode, HistoryIcon, Qrcode2, Qrcode3, Scaner} from '../Assests';

import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Linking,
  Image,
  View,
  ScrollView,
} from 'react-native';
import Colors from '../Assests/ColorFormat';
import ScanScreen from './ScanScreen';
const Scanner = ({navigation}) => {
  return (
    <ScrollView>
      <SafeAreaView style={{flex: 1}}>
        <Image
          source={require('../Assests/background.png')}
          style={{height: 320, width: 400}}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 50,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate(ScanScreen)}>
            <View
              style={{
                backgroundColor: Colors.orange,
                borderRadius: 30,
                alignItems: 'center',
              }}>
              <Qrcode2 />
            </View>
            <Text style={{textAlign: 'center'}}> Qr code</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                backgroundColor: Colors.orange,
                borderRadius: 30,
                alignItems: 'center',
              }}>
              <BarCode />
            </View>
            <Text style={{textAlign: 'center'}}> Bar code</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: Colors.black,
            opacity: 0.8,
            padding: 30,
            margin: 10,
            borderRadius: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity>
            <Qrcode3 />
          </TouchableOpacity>
          <View style={{position: 'absolute', marginLeft: 140, top: -40}}>
            <Scaner />
          </View>
          <TouchableOpacity>
            <HistoryIcon />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
export default Scanner;
