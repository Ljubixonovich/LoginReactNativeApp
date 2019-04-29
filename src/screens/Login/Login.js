import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import startMainTabs from '../../startMainTabs';
import { fonts } from '../../assets/index';
import Btn from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';

class LoginScreen extends Component {
   constructor(props) {
      super(props);
   }

   loginHandler = () => {
      startMainTabs();
   }

   render() {
      return (
         <ImageBackground source={require('../../assets/images/background.png')}
            style={{ flex: 1, width: '100%', height: '100%' }}
         >
            <View style={styles.mainContainer}>
               <View style={styles.inputContainer}>
                  <DefaultInput
                     placeholder='UserName' style={styles.input}

                  />
                   <DefaultInput
                     placeholder='Password' style={styles.input}
                     secureTextEntry
                  />
               </View>

               <View style={styles.btnContainer}>
                  <Btn
                     width = { 200 }
                     textColor='black'
                     color='#67B5CA'
                     onPress={this.loginHandler}
                     fontFamily={fonts.light}
                  >
                     LOGIN
                  </Btn>
               </View>
            </View>
         </ImageBackground>
      );
   }
}

const styles = StyleSheet.create({
   mainContainer: {
      flex: 1,
      padding: 15,
   },
   inputContainer: {
      flex: 2,
      justifyContent: 'flex-end',
      marginLeft: 20,
      marginRight: 20,
   },
   btnContainer: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 30
   },
   input: {
      backgroundColor: '#eee',
      fontFamily: fonts.light
   }
});

const mapStateToProps = state => {
   return {
      isLoading: state.ui.isLoading
   };
}


export default connect(mapStateToProps, null)(LoginScreen);