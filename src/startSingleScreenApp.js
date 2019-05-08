import { Navigation } from 'react-native-navigation';

const startSingleScreenApp = () => {
   Navigation.startSingleScreenApp({
      screen: {
         screen: "loginApp.LoginScreen",
         title: "Login",
         navigatorStyle: { navBarHidden: true }
      },
      appStyle: {
         orientation: 'portrait'
      },
   });
}

export default startSingleScreenApp;