import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import startMainTabs from '../../startMainTabs';
import { fonts } from '../../assets/index';
import Btn from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import validate from '../../utility/validation';
import { tryAuth } from '../../store/actions';
import { getToken, deleteToken } from '../../store/sagas';
import { verifyToken } from '../../store/api';

class LoginScreen extends Component {
   constructor(props) {
      super(props);
   }

   // componentDidMount() {
   //    this.props.onAutoSignIn();
   // }

   componentWillMount = async () => {
      const storedToken = await getToken();
      console.log('ljToken: ' + storedToken);

      if (!storedToken) {
         return;
      }

      const result = await verifyToken(storedToken);
      console.log('result: ' + result);
      console.log('result.data.status: ' + result.data.status);

      if (result.data.status === 200) {
         //  deleteToken();
         startMainTabs();
      } else {
         deleteToken();
      }
   }

   state = {
      controls: {
         userName: {
            value: '',
            valid: false,
            validationRules: {
               notEmpty: true
            },
            touched: false
         },
         password: {
            value: '',
            valid: false,
            validationRules: {
               notEmpty: true
            },
            touched: false
         }
      }
   };

   updateInputState = (key, value) => {
      this.setState(prevState => {
         return {
            controls: {
               ...prevState.controls,
               [key]: {
                  ...prevState.controls[key],
                  value: value,
                  valid: validate(value, prevState.controls[key].validationRules),
                  touched: true
               }
            }
         };
      });
   };

   loginHandler = () => {
      this.props.onTryAuth(
         this.state.controls.userName.value,
         this.state.controls.password.value
      );
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
                     value={this.state.controls.userName.value}
                     valid={this.state.controls.userName.valid}
                     touched={this.state.controls.userName.touched}
                     onChangeText={(val) => this.updateInputState('userName', val)}
                  />
                  <DefaultInput
                     placeholder='Password' style={styles.input}
                     value={this.state.controls.password.value}
                     valid={this.state.controls.password.valid}
                     touched={this.state.controls.password.touched}
                     onChangeText={(val) => this.updateInputState('password', val)}
                     secureTextEntry
                  />
               </View>

               <View style={styles.btnContainer}>
                  <Btn
                     width={200}
                     textColor='black'
                     color='#67B5CA'
                     onPress={this.loginHandler}
                     fontFamily={fonts.light}
                     disabled={
                        !this.state.controls.userName.valid ||
                        !this.state.controls.password.valid}
                  >
                     {this.props.isLoading ? 'LOGGING IN...' : 'LOGIN'}
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

const mapDispatchToProps = dispatch => {
   return {
      onTryAuth: (userName, password) => dispatch(tryAuth(userName, password)),
      // onAutoSignIn: () => dispatch(authAutoSignIn())
   };
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);