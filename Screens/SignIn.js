import React from 'react';
import {Text, StyleSheet, Button, View, Image, TextInput, TouchableOpacity} from 'react-native';


const SignIn = ({navigation})=> {
    function navigate() {
        navigation.navigate('schoolEvents')
    }
    return (
        <View style={styles.mainView}>
          <View style={styles.TopView}>
            <Image style={styles.ImageStyle} source={require('../assets/images/PrimaryLogo.png')}/>
          </View>
        <View style={styles.BottomView}>
          <Text style={styles.Heading}>Welcome back</Text>
          <View style={styles.FormView}>
            <TextInput placeholder={"Email address"} placeholderTextColor={'#000'} style={styles.TextInput}/>
            <TextInput placeholder={"Password"} placeholderTextColor={'#000'} secureTextEntry={true} style={styles.TextInput}/>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.ButtonText} onPress={navigate}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>

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
    TopView: {
      width: '100%',
      height: '40%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    BottomView: {
      width: '100%',
      height: '60%',
      backgroundColor: '#A8003B',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30
    },
    ImageStyle: {
      width: '50%',
      resizeMode: 'contain',
    },
    Heading: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 30,
      textAlign: 'center'
    },
    FormView: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 80,
    },
    TextInput: {
      width: '90%',
      borderWidth: 1,
      borderColor: '#000',
      backgroundColor: '#fff',
      height: 50,
      borderRadius: 10,
      paddingLeft: 5,
      marginTop: 20
    },
    Button: {
      width: '90%',
      color: '#000',
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 10,
      marginTop: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    ButtonText: {
      fontWeight: 'bold',
      fontSize: 15
    }
  }
)

export default SignIn