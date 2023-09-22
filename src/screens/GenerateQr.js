import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Colors from '../Assests/ColorFormat';

const GenerateQr = () => {
  const [msg, setMsg] = useState(' ');
  return (
    <View style={{flex: 1}}>
      <TextInput
        style={styles.input}
        placeholder="Enter your Input here"
        onChangeText={text => {
          if (text === '') {
            setMsg(' ');
          } else {
            setMsg(text);
          }
        }}
        value={msg}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <QRCode value={msg} size={200}></QRCode>
      </View>
      <TouchableOpacity
        onPress={() => setMsg(' ')}
        style={{
          height: 40,
          marginVertical: 42,
          marginHorizontal: 15,
          borderWidth: 1,
          padding: 10,
          borderRadius: 20,
          backgroundColor: Colors.orange,
        }}>
        <Text style={{textAlign: 'center'}}>clean</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    marginVertical: 42,
    marginHorizontal: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
});
export default GenerateQr;
