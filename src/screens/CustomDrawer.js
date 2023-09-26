/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Colors from '../Assests/ColorFormat';
import {Image, ImageBackground, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Logout, Share} from '../Assests';
const CustomDrawer = props => {
  return (
    <>
      <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1}}>
        <ImageBackground
          source={require('../Assests/menu.jpg')}
          style={{padding: 20}}>
          <Image
            source={require('../Assests/user-profile.jpg')}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginVertical: 30,
            }}
          />
          <Text style={{color: Colors.black, fontSize: 20}}>Mohd Ahtesham</Text>
          <Text style={{color: Colors.black, fontSize: 15}}>200 coins</Text>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1}}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Share height={30} width={20} />
          <Text style={{marginLeft: 10}}>Tell a friend</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', margin: 5}}>
          <Logout height={30} width={20} />
          <Text style={{marginLeft: 10}}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default CustomDrawer;
