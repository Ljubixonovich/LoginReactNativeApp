import React from 'react';
import { 
   TouchableOpacity,
   TouchableNativeFeedback,
   Text,
   View,
   StyleSheet,
   Platform
} from 'react-native';

const buttonWithBackground = props => {
   const content = (
      <View style={[
         styles.button,
         { 
            backgroundColor: props.color,
            width: props.width
         },
         props.disabled ? styles.disabled : null
      ]}>
         <Text style={[
            {
               textAlign: 'center',
               fontSize: 24,
               color: props.textColor,
               fontFamily: props.fontFamily
            },
            props.disabled ? styles.disabledText : null
         ]}>
            {props.children}
         </Text>
      </View>
   );

   if (props.disabled) {
      return content;
   }

   if (Platform.OS === 'android') {
      return (
         <TouchableNativeFeedback onPress={props.onPress}>
            {content}
         </TouchableNativeFeedback>
      );
   }

   return (
      <TouchableOpacity onPress={props.onPress}>
         {content}
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   button: {
      padding: 10,
      margin: 5,
   },
   disabled: {
      backgroundColor: '#eee',
      borderColor: '#aaa'
   },
   disabledText: {
      color: '#aaa'
   }
});


export default buttonWithBackground;
