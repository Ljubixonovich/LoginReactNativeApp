import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground, Animated } from 'react-native';
import { connect } from 'react-redux';

import { fonts } from '../../assets/index';

class WelcomeScreen extends Component {
   state = {
      showTitle: true,
      removeAnim: new Animated.Value(1)
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

      Animated.timing(this.state.removeAnim, {
         toValue: 0,
         duration: 300
      })
      .start();

      this.props.navigator.toggleTabs({
         // to: 'hidden',
         to: 'shown',
         animated: true
      });
   }


   render() {
      return (
         <ImageBackground 
            source={require('../../assets/images/background.png')}
            style={{ width: '100%', height: '100%' }}
            imageStyle={{ resizeMode: 'cover' }}
         >
            <View style={styles.titleContainer}>
               <Animated.View style={{opacity: this.state.removeAnim}}>
                  <Text style={styles.titleText}>
                     Welcome.
                  </Text>
               </Animated.View>
            </View>

         </ImageBackground>
      );
   }
}

const styles = StyleSheet.create({
   titleContainer: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
   },
   titleText: {
      fontFamily: fonts.light, 
      fontSize: 48, 
      color: 'white'
   }
});

const mapStateToProps = state => {
   return {
      isLoading: state.ui.isLoading
   };
}


export default connect(mapStateToProps, null)(WelcomeScreen);
