import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  TouchableOpacity, 
  ActivityIndicator, 
  Platform
} from 'react-native';

export default class Tambah extends React.Component {
  static navigationOptions =
    {
       title: 'Tambah Buku',
    };

  constructor()
  {
      super();

      this.state = { buku_kode: '', buku_judul: '', penulis: '', penerbit: '', sinopsis: '', sampul: '', kategori_id: '', loading: false, disabled: false }
  }

  saveData= () =>
  {
      this.setState({ loading: true, disabled: true }, () =>
      {
          fetch('https://temenanid.000webhostapp.com/tambahbuku.php',
          {
              method: 'POST',
              headers: 
              {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(
              {
                buku_kode: this.state.buku_kode,
                buku_judul: this.state.buku_judul,
                penulis: this.state.penulis,
                penerbit: this.state.penerbit,
                sinopsis: this.state.sinopsis,
                sampul: this.state.sampul,
                kaetgori_id: this.state.kategori_id
              })

          }).then((response) => response.text()).then((responseJson) =>
          {
              alert(responseJson);
              this.setState({ loading: false, disabled: false });
          }).catch((error) =>
          {
              console.error(error);
              this.setState({ loading: false, disabled: false });
          });
      });
  }

  

  render() {
    return (
      <View style={styles.container}>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom:30,}}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: "white" }}>TAMBAH BUKU</Text>
         </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/metro/26/000000/outline.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Kode Buku"
              underlineColorAndroid='transparent'
              onChangeText={(buku_kode) => this.setState({buku_kode})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/metro/26/000000/pen.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Judul Buku"
              underlineColorAndroid='transparent'
              onChangeText={(buku_judul) => this.setState({buku_judul})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/metro/26/000000/administrator-male.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Penulis Buku"
              underlineColorAndroid='transparent'
              onChangeText={(penulis) => this.setState({penulis})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/metro/26/000000/apartment.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Penerbit"
              underlineColorAndroid='transparent'
              onChangeText={(penerbit) => this.setState({penerbit})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/metro/26/000000/edit-image.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Sinopsis"
              underlineColorAndroid='transparent'
              onChangeText={(sinopsis) => this.setState({sinopsis})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/metro/26/000000/sorting-answers.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Kategori"
              underlineColorAndroid='transparent'
              onChangeText={(kategori_id) => this.setState({kategori_id})}/>
        </View>

        <TouchableOpacity style={[styles.buttonImage, styles.imageButton]} onPress={() => this.props.navigation.navigate('Upload')}>
         <Text style={styles.TextStyle}> Sampul </Text>
        </TouchableOpacity>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.saveData()}>
          <Text style={styles.loginText}>Tambah</Text>
        </TouchableHighlight>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006666',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:10,
      borderBottomWidth: 1,
      width:320,
      height:40,
      marginBottom:10,
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
    marginBottom:10,
    width:100,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#666666",
  },
  buttonImage: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:100,
    
  },
  imageButton: {
    backgroundColor: "white",
  },
  imageText: {
    color: 'black',
  },
  loginText: {
    color: 'white',
  }
});