import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import { fonts } from '../../assets/index';

class WelcomeScreen extends Component {
   state = {
      showTitle: true
   };

   static navigatorStyle = {
      tabBarHidden: true
   }
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      setTimeout(this.showTabs, 1000);
   }

   showTabs = () => {
      this.setState(prevState => {
         return {
            ...prevState,
            showTitle: false
         };
      });

      this.props.navigator.toggleTabs({
         // to: 'hidden',
         // animate: true,
         to: 'shown',
         animated: true
      });
   }


   render() {
      return (
         <ImageBackground source={require('../../assets/images/background.png')}
            style={{ width: '100%', height: '100%' }}
            imageStyle={{ resizeMode: 'cover' }}
         >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <Text style={{ fontFamily: fonts.light, fontSize: 48, color: 'white' }}>
                  {this.state.showTitle ? 'Welcome.' : ''}
               </Text>
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


export default connect(mapStateToProps, null)(WelcomeScreen);
