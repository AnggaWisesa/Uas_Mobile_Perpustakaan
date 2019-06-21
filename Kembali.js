import React, { Component } from 'react';
import { Text ,View,FlatList,StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
  const axios = require('axios');
export default class Kembali extends React.Component {
  static navigationOptions =
    {
       title: 'Pengembalian Buku',
    };
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pinjam_kode : '',
    };
}
componentDidMount(){
axios.get('https://temenanid.000webhostapp.com/pinjam.php')
.then((response)=>{
  console.log(response.data);
  this.setState({ data:response.data });
})
.catch(function (error) {
// handle error
console.log(error); 
});

}
KembaliBuku = () =>{
        
  fetch('https://temenanid.000webhostapp.com/kembalibuku.php', {
  method: 'POST',
  headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  },
  body: JSON.stringify({

    kode_pinjam : this.state.pinjam_kode

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
                      <Text style={{fontWeight: 'bold' }}>Buku Yang Dipinjam</Text>
                      <Text>Kode Pinjam   : {item.kode_pinjam}</Text>
                      <Text>Kode Buku : {item.kode_buku}</Text>
                      <Text>Judul Buku    : {item.buku_judul}</Text>
                      <Text>Kategori   : {item.kategori_id}</Text>
                      <Text>Nama   : {item.nama}</Text>
                      <Text>Nim   : {item.nim}</Text>
                      <Text>Tanggal   : {item.tanggal}</Text>
                      <Text></Text>

                    <View style={styles.crud}>
                    <TouchableOpacity style={[styles.buttonImage, styles.imageButton]} onPress={() => this.KembaliBuku()}>
                      <Text style={styles.imageText}> Kembalikan Buku </Text>
                    </TouchableOpacity>
                    <TextInput style={styles.inputs}
                      placeholder="Masukan Kode Pinjam"
                      keyboardType="email-address"
                      underlineColorAndroid='transparent'
                      onChangeText={(pinjam_kode) => this.setState({pinjam_kode})}/>
                      </View>
                    </View>)} />
                
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
    width:150,
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
crud:{
  flexDirection:'row',
},
});