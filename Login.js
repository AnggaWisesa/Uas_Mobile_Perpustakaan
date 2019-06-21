import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

export default class Login extends Component {
  static navigationOptions = {
    header: null
}

  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
    }
  }
  Login= () =>{
    if(this.state.email == 'Admin' && this.state.password == 'admin'){
      this.props.navigation.navigate('Main')
    }else{
      Alert.alert('Masukan Username dan Password yang Benar!!!');
  }
}

  render() {
    return (
      

      <View style={styles.container}>
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: "white" }}>SISTEM MANAJEMEN</Text>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: "white" }}>PERPUSTAKAAN</Text>
         </View>
        <Image source = {{uri: 'https://i.pinimg.com/originals/5e/af/f3/5eaff33f83a4d168947c965bbf4f8c40.png'}} style = {{width: 150, height: 150, marginBottom:10}} />
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.Login()}>
          <Text style={styles.loginText}>Sign</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006666',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#666666",
  },
  loginText: {
    color: 'white',
  }
});
 