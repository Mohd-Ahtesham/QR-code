import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Arrow, HomeIndicater, Qrcode} from '../Assests';
import Scanner from './Scanner';
import Colors from '../Assests/ColorFormat';
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.CenterIcon}>
        <Qrcode />
      </View>

      <View style={style.BottomCnt}>
        <ScrollView>
          <View style={{alignItems: 'center', margin: 22}}>
            <HomeIndicater />
          </View>
          <Text style={style.FirstTxt}>Get Started</Text>
          <Text style={style.MidTxt}>Go and enjoy our features for free</Text>
          <Text style={style.MidTxt}>and make your life easy with us.</Text>
          <TouchableOpacity
            style={style.BottomBtn}
            onPress={() => navigation.navigate(Scanner)}>
            <Text style={style.BtnTxt}>Let’s Go</Text>
            <Arrow style={{marginRight: 20}} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.orange},
  CenterIcon: {flex: 1.5, justifyContent: 'center', alignItems: 'center'},
  BottomCnt: {
    flex: 0.7,
    backgroundColor: '#333',
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
  },
  FirstTxt: {color: Colors.white, fontSize: 42, textAlign: 'center'},
  MidTxt: {color: Colors.white, fontSize: 15, textAlign: 'center'},
  BottomBtn: {
    padding: 10,
    backgroundColor: Colors.orange,
    margin: 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  BtnTxt: {color: Colors.black, marginLeft: 20},
});
export default Home;
