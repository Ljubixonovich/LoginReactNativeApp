import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import startMainTabs from '../../startMainTabs';
import { fonts } from '../../assets/index';

class LoginScreen extends Component {
   constructor(props) {
      super(props);
   }

   loginHandler = () => {
      startMainTabs();
   }

   render() {
      return(
         <ImageBackground source={require('../../assets/images/background.png')} 
            style={{width: '100%', height: '100%'}}
         >
            <View style={{flex: 1}}>
               <Text style={{fontFamily: fonts.light}}>Login app</Text>
               <Button title='Go' onPress={this.loginHandler} />
            </View>
         </ImageBackground>
      );
   }
}

const mapStateToProps = state => {
   return {
     isLoading: state.ui.isLoading  
   };
 }
 
 
 export default connect(mapStateToProps, null)(LoginScreen);