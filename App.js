import React, {useEffect} from 'react';
import Navigation from './src/screens/Navigation';
import SplashScreen from 'react-native-splash-screen';
import {Platform} from 'react-native';

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);
  return <Navigation />;
};
export default App;
