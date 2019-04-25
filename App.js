import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import LoginScreen from './src/screens/Login/Login';
import WelcomeScreen from './src/screens/Welcome/Welcome';
import store from './src/store/configureStore';

Navigation.registerComponent('loginApp.LoginScreen', () => LoginScreen, store, Provider);
Navigation.registerComponent('loginApp.WelcomeScreen', () => WelcomeScreen, store, Provider);

// Start App
export default () => Navigation.startSingleScreenApp({
   screen: {
     screen: "loginApp.LoginScreen",
     title: "Login",
     navigatorStyle : {navBarHidden: true }
   },
   appStyle: {
      orientation: 'portrait'      
   },
 });


