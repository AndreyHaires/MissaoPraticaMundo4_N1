import React from 'react';
 import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
 import { useNavigation } from '@react-navigation/native';
 import { styles } from '../styles';
 
 export default function Home(){
   const navigation = useNavigation();

   function irCadastro(){
      navigation.navigate('Cadastro', { });}
   function irLista(){
      navigation.navigate('Lista', { });}


   return(
    <View style={styles.area}>

      <Image 
        source={require('../../images/Meeting_logo.png')} 
        style={styles.img}
      />

      <TouchableOpacity 
        style={styles.btn}
        onPress={irCadastro}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}> CADASTRO </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.btn}
        onPress={irLista}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}> LISTA DE FORNECEDORES </Text>
        </View>
      </TouchableOpacity>

    </View>
    );
 }
 
  

