import React, { Component } from 'react';
import { StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert } from 'react-native';

export default class Pinjam extends React.Component {
  static navigationOptions =
    {
       title: 'Pinjam Buku',
    };
  constructor()
  {
      super();

      this.state = { kode_pinjam: '', kode_buku: '', buku_judul: '', kategori_id: '', nama: '', nim: '',tanggal: '', loading: false, disabled: false }
  }

  saveData= () =>
  {
      this.setState({ loading: true, disabled: true }, () =>
      {
          fetch('https://temenanid.000webhostapp.com/tambahpinjam.php',
          {
              method: 'POST',
              headers: 
              {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(
              {
                kode_pinjam: this.state.kode_pinjam,
                kode_buku: this.state.kode_buku,
                buku_judul: this.state.buku_judul,
                kategori_id: this.state.kategori_id,
                nama: this.state.nama,
                nim: this.state.nim,
                tanggal: this.state.tanggal
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
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: "white" }}>PINJAM BUKU</Text>
         </View>

         <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://temenanid.000webhostapp.com/open-book.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Kode Pinjam"
              underlineColorAndroid='transparent'
              onChangeText={(kode_pinjam) => this.setState({kode_pinjam})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/metro/26/000000/outline.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Kode Buku"
              underlineColorAndroid='transparent'
              onChangeText={(kode_buku) => this.setState({kode_buku})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/metro/26/000000/pen.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Judul Buku"
              underlineColorAndroid='transparent'
              onChangeText={(buku_judul) => this.setState({buku_judul})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/metro/26/000000/sorting-answers.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Kategori"
              underlineColorAndroid='transparent'
              onChangeText={(kategori_id) => this.setState({kategori_id})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/metro/26/000000/administrator-male.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Nama"
              underlineColorAndroid='transparent'
              onChangeText={(nama) => this.setState({nama})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://temenanid.000webhostapp.com/list-button.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="NIM"
              underlineColorAndroid='transparent'
              onChangeText={(nim) => this.setState({nim})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://temenanid.000webhostapp.com/calendar.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Tanggal Pinjam"
              underlineColorAndroid='transparent'
              onChangeText={(tanggal) => this.setState({tanggal})}/>
        </View>


        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.saveData()}>
          <Text style={styles.loginText}>Pinjam</Text>
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
    marginBottom:20,
    width:100,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#666666",
  },
  loginText: {
    color: 'white',
  }
});