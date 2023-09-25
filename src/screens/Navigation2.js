import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';

import Scanner from './Scanner';
import ScanScreen from './ScanScreen';
import GenerateQr from './GenerateQr';
import CustomDrawer from './CustomDrawer';
const Drawer = createDrawerNavigator();

const Navigation2 = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Drawer.Screen name="Scanner" component={Scanner} />
        <Drawer.Screen name="ScanScreen" component={ScanScreen} />
        <Drawer.Screen name="GenerateQr" component={GenerateQr} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default Navigation2;
