import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';

import { fonts } from '../../assets/index';

class Mock1Screen extends Component {

   render() {
      return (
         <ImageBackground source={require('../../assets/images/background.png')}
            style={{ width: '100%', height: '100%' }}
            imageStyle={{ resizeMode: 'cover' }}
         >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <Text style={{ fontFamily: fonts.light, fontSize: 48, color: 'white' }}>
                  Mock Screen
               </Text>
            </View>

         </ImageBackground>
      );
   }
}

export default Mock1Screen;
