import React, {useEffect} from 'react';
import Navigation from './src/screens/Navigation';
import SplashScreen from 'react-native-splash-screen';
import Navigation2 from './src/screens/Navigation2';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <Navigation2 />;
};
export default App;
