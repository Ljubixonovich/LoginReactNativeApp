import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import { fonts } from '../../assets/index';

class LoginScreen extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return(
         <View style={{flex: 1}}>
            <Text style={{fontFamily: fonts.light}}>Login app</Text>
         </View>
      );
   }
}

const mapStateToProps = state => {
   return {
     isLoading: state.ui.isLoading  
   };
 }
 
 
 export default connect(mapStateToProps, null)(LoginScreen);