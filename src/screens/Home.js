/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Arrow, HomeIndicater, Qrcode} from '../Assests';
import Scanner from './Scanner';
import Colors from '../Assests/ColorFormat';
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.orange}}>
      <View style={{flex: 1.5, justifyContent: 'center', alignItems: 'center'}}>
        <Qrcode />
      </View>

      <View
        style={{
          flex: 0.7,
          backgroundColor: '#333',
          borderTopRightRadius: 22,
          borderTopLeftRadius: 22,
        }}>
        <ScrollView>
          <View style={{alignItems: 'center', margin: 22}}>
            <HomeIndicater />
          </View>
          <Text
            style={{color: Colors.white, fontSize: 42, textAlign: 'center'}}>
            Get Started
          </Text>
          <Text
            style={{color: Colors.white, fontSize: 15, textAlign: 'center'}}>
            Go and enjoy our features for free
          </Text>
          <Text
            style={{color: Colors.white, fontSize: 15, textAlign: 'center'}}>
            {' '}
            and make your life easy with us.
          </Text>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: Colors.orange,
              margin: 20,
              borderRadius: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate(Scanner)}>
            <Text style={{color: Colors.black, marginLeft: 20}}>Let’s Go</Text>
            <Arrow style={{marginRight: 20}} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Home;
