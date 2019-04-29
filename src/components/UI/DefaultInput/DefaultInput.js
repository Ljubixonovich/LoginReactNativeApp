import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = props => (
   <TextInput
      {...props}
      style={[styles.input, props.style, !props.valid && props.touched ? styles.invalid : null]}
   />
)

const styles = StyleSheet.create({
   input: {
      width: '100%',
      padding: 12,
      marginTop: 4,
      marginBottom: 4,
      fontSize: 18
   },
   invalid: {
      backgroundColor: '#f9c0c0',
      borderColor: 'red'
   }
});

export default defaultInput;
