import React, { Component } from 'react';
import { Text ,View,FlatList,StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';

const axios = require('axios');
export default class Daftar extends React.Component {
  static navigationOptions =
    {
       title: 'Daftar Buku',
    };
    
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      Kode_buku   : '',
    };
}
componentDidMount(){
axios.get('https://temenanid.000webhostapp.com/buku.php')
.then((response)=>{
  console.log(response.data);
  this.setState({ data:response.data });
})
.catch(function (error) {
// handle error
console.log(error); 
});

}
DeleteBuku = () =>{
        
  fetch('https://temenanid.000webhostapp.com/hapusbuku.php', {
  method: 'POST',
  headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  },
  body: JSON.stringify({

    buku_kode : this.state.Kode_buku

  })

  }).then((response) => response.text())
  .then((responseJson) => {

    // Showing response message coming from server after inserting records.
    alert(responseJson);

  }).catch((error) => {
     console.error(error);
  });

  this.props.navigation.navigate('First');

}

render() {
  return (
  <View style={styles.vMain}>
  <ScrollView>
      <View style={styles.vHeader}>
          
           <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={this.state.data}
              renderItem={({item}) => (
                  <View style={styles.tampil}>
                      <Text style={{fontWeight: 'bold' }}>Daftar Buku</Text>
                     <Text>Kode Buku   : {item.buku_kode}</Text>
                      <Text>Judul Buku : {item.buku_judul}</Text>
                      <Text>Penulis    : {item.penulis}</Text>
                      <Text>Penerbit   : {item.penerbit}</Text>
                      <Text>Sinopsis   : {item.sinopsis}</Text>
                      <Text></Text>
                    
                    <View style={styles.crud}>
                    <TouchableOpacity style={[styles.buttonImage, styles.imageButton]} onPress={() => this.DeleteBuku()}>
                      <Text style={styles.imageText}> Hapus </Text>
                    </TouchableOpacity>
                    <TextInput style={styles.inputs}
                      placeholder="Masukan Kode Buku"
                      keyboardType="email-address"
                      underlineColorAndroid='transparent'
                      onChangeText={(Kode_buku) => this.setState({Kode_buku})}/>
                    </View>
                    </View>
              )
              }
          />
          
          
      </View>
  </ScrollView>
  </View>
  )
}
}
const styles = StyleSheet.create({
vHeader: {
  flex: 1,
  backgroundColor: 'white',
 

},
txtBox2: {
  color: 'white',
  alignItems: 'center',
  fontSize: 18,

},
BoxStyle: {
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#08088a',
borderRadius: 5,
width: '80%',
height: 50, 
},
  buttonImage: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:100,
    borderRadius:30,
    
  },
  imageButton: {
    backgroundColor: "#006666",
  },
tampil:{
  backgroundColor: 'white',

},
imageText: {
  color: 'white',
},
inputs:{
  height:45,
  marginLeft:16,
  borderBottomColor: '#FFFFFF',
  flex:1,
},
crud:{
  flexDirection:'row',
},
});