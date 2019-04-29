import { Navigation } from 'react-native-navigation';

import { fonts } from '../src/assets/fonts';


const startTabs = () => {

   Navigation.startTabBasedApp({
      tabs: [
         {
            screen: 'loginApp.WelcomeScreen',
            label: 'WelcomeScreen',
            title: 'WelcomeScreen',
            icon: require('./assets/images/home-var-outline.png'),
            navigatorStyle : { navBarHidden: true }
         },
         {
            screen: 'loginApp.Mock1Screen',
            label: 'Mock1Screen',
            title: 'Mock1Screen',
            icon: require('./assets/images/search-outline.png'),
            navigatorStyle : { navBarHidden: true }
         },
         {
            screen: 'loginApp.Mock1Screen',
            label: 'Mock1Screen',
            title: 'Mock1Screen',
            icon: require('./assets/images/gift-outline.png'),
            navigatorStyle : { navBarHidden: true }
         },
         {
            screen: 'loginApp.Mock1Screen',
            label: 'Mock1Screen',
            title: 'Mock1Screen',
            icon: require('./assets/images/chat-outline.png'),
            navigatorStyle : { navBarHidden: true }
         },
         {
            screen: 'loginApp.Mock1Screen',
            label: 'Mock1Screen',
            title: 'Mock1Screen',
            icon: require('./assets/images/settings-var-outline.png'),
            navigatorStyle : { navBarHidden: true }
         },
      ],
      appStyle: {
         tabBarHidden: false,
         tabBarButtonColor: 'black',
         tabBarTextFontFamily: fonts.light,
         tabBarBackgroundColor: '#71A6D5'
      },
   });

};

export default startTabs;
