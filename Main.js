import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class Main extends Component {
  static navigationOptions =
    {
       title: 'HOME',
    };

  render() {
    return (
      <View style={styles.container}>
          <Image source = {{uri: 'https://temenanid.000webhostapp.com/membacafix.jpg'}} style = {{marginBottom:15, width: 390, height: 200}} />
          <Text style={styles.TextStyle}> MENU</Text>
        <View style={styles.menu}>
        <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Tambah')}>
          <Image source={{ uri: 'https://img.icons8.com/color/420/add-book.png',  }} style={styles.ImageIconStyle} />
          {/* <View style={styles.SeparatorLine} /> */}
          <Text style={styles.TextStyle}> Tambah Buku </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Daftar')}> 
         <Image  source={{  uri: 'http://kom.fisip-untirta.ac.id/wp-content/uploads/2018/05/buku-catetan.png',  }} style={styles.ImageIconStyle} />
          {/* <View style={styles.SeparatorLine} /> */}
          <Text style={styles.TextStyle}> Daftar Buku </Text>
        </TouchableOpacity>
        </View>

        <View style={styles.menu}>
        <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Pinjam')}>
          <Image source={{ uri: 'https://temenanid.000webhostapp.com/pinjampulang-01.png',  }} style={styles.ImageIconStyle1} />
          {/* <View style={styles.SeparatorLine} /> */}
          <Text style={styles.TextStyle}> Pinjam Buku </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5}onPress={() => this.props.navigation.navigate('Kembali')}> 
         <Image  source={{  uri: 'https://temenanid.000webhostapp.com/pinjampulang-01.png',  }} style={styles.ImageIconStyle1} />
          {/* <View style={styles.SeparatorLine} /> */}
          <Text style={styles.TextStyle}>Pengembalian Buku</Text>
        </TouchableOpacity>
        </View>   
        
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
  GooglePlusStyle: {
    
    alignItems: 'center',
    backgroundColor: '#006666',
    borderWidth: 0.5,
    borderColor: '#006666',
    width:150,
    height:150,
    borderRadius: 5,
    margin: 5,
    justifyContent: 'center', 
  },
  FacebookStyle: {
    
    alignItems: 'center',
    backgroundColor: '#006666',
    borderWidth: 0.5,
    borderColor: '#006666',
    width:150,
    height:150,
    borderRadius: 5,
    margin: 5,
    justifyContent: 'center', 
    
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 100,
    width: 100,
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  ImageIconStyle1: {
    padding: 10,
    margin: 5,
    height: 100,
    width: 120,
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignItems: 'center', 

  },
  TextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold', 
  },
  MenuStyle: {
    color: '#fff',
    marginBottom: 4,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 18, 
    
  },
  SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
  menu: {
    flexDirection:'row',
       
  }
});