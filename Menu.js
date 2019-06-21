import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './Login';
import Main from './Main';
import Daftar from './Daftar';
import Kembali from './Kembali';
import Pinjam from './Pinjam';
import Tambah from './Tambah';
import Upload from './Upload';




const AppNavigator = createStackNavigator(
        {
            Utama: Login,
            Main:Main,
            Daftar:Daftar,
            Kembali:Kembali,
            Pinjam:Pinjam,
            Tambah:Tambah,
            Upload:Upload,
    
        },
        {
            initialRouteName: "Utama"
        }
        );
export default createAppContainer(AppNavigator);