import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import LoginScreen from './src/screens/Login/Login';
import WelcomeScreen from './src/screens/Welcome/Welcome';
import Mock1Screen from './src/screens/Mock1/Mock1';
import store from './src/store/configureStore';
import startSingleScreenApp from './src/startSingleScreenApp';


Navigation.registerComponent('loginApp.LoginScreen', () => LoginScreen, store, Provider);
Navigation.registerComponent('loginApp.WelcomeScreen', () => WelcomeScreen, store, Provider);
Navigation.registerComponent('loginApp.Mock1Screen', () => Mock1Screen, store, Provider);

// Start App
export default () => {
   startSingleScreenApp();
}
