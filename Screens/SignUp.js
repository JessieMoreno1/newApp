import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

const SignUp = ()=> {
    return (
        <View style={styles.mainView}>
            <Text style={styles.textStyle}>SchoolEvents</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
      marginTop: 20,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    textStyle: {
      color: 'green'
    },
    buttonStyle: {
      color: 'green'
    }
  }
)

export default SignUp