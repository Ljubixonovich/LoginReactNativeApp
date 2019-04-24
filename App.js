import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import LoginScreen from './src/screens/Login/Login';
import store from './src/store/configureStore';

Navigation.registerComponent('loginApp.LoginScreen', () => LoginScreen, store, Provider);

// Start App
export default () => Navigation.startSingleScreenApp({
   screen: {
     screen: "loginApp.LoginScreen",
     title: "Login"
   },
   appStyle: {
      orientation: 'portrait',
      // navigatorStyle: {
      //    navBarBackgroundColor: '#f7f7f7',
      //    // navBarHidden: true
      // }
      
   },
 });


