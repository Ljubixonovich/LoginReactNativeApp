import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import {name as appName} from './app.json';

import App from './App';
import store from './src/store/configureStore';

App();

const RNRedux = () => {
   return (
      <Provider store={store}>
         <App />
      </Provider>
   );
   // <Provider store={store}>
   //    <App />
   // </Provider>
}


AppRegistry.registerComponent(appName, () => RNRedux);
