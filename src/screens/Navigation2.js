/* eslint-disable react/react-in-jsx-scope */
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';

import Scanner from './Scanner';
import ScanScreen from './ScanScreen';
import GenerateQr from './GenerateQr';
import CustomDrawer from './CustomDrawer';
import {BarCode, HomeIcon, Qrcode2, Qrcode3, Qrcode4} from '../Assests';
import Colors from '../Assests/ColorFormat';
const Drawer = createDrawerNavigator();

const Navigation2 = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          drawerActiveBackgroundColor: Colors.orange,
          drawerActiveTintColor: Colors.white,
        }}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            drawerIcon: () => <HomeIcon height={30} width={30} />,
          }}
        />
        <Drawer.Screen
          name="Scanner"
          component={Scanner}
          options={{
            drawerIcon: () => (
              <Qrcode2 height={30} width={30} fill={Colors.black} />
            ),
          }}
        />
        <Drawer.Screen
          name="ScanScreen"
          component={ScanScreen}
          options={{
            drawerIcon: () => (
              <BarCode height={30} width={30} fill={Colors.black} />
            ),
          }}
        />
        <Drawer.Screen
          name="GenerateQr"
          component={GenerateQr}
          options={{
            drawerIcon: () => (
              <Qrcode4 height={30} width={30} fill={Colors.black} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default Navigation2;
