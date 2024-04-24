import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'react-native-image-picker';

export default function Cadastro({ route }) {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagem, setImagem] = useState('');

  const CadastroFornecedor = async () => {
    const fornecedor = { nome, endereco, contato, categoria };
    fornecedor.imagem = await AsyncStorage.getItem('imagem');
    const sucesso = await armazenarFornecedor(fornecedor);
    if (sucesso) {
      console.log('Fornecedor cadastrado com sucesso:', fornecedor);
      navigation.goBack();
    } else {
      console.log('Erro ao cadastrar fornecedor');
    }
  };

  async function anexarImagem() {
    const options = {
      title: 'Selecione uma foto',
      chooseFromLibraryButtonTitle: 'Buscar foto do álbum...',
      noData: true,
      mediaType: 'photo'
    };

    ImagePicker.launchImageLibrary(options, async (response) => {
      if (response.didCancel) {
        console.log('Image Picker cancelado...');
      } else if (response.error) {
        console.log('Gerou algum erro ' + response.error);
      } else {
        const imagePath = response.uri;
        try {
          await AsyncStorage.setItem('imagem', imagePath);
          setImagem(imagePath);
        } catch (error) {
          console.log('Erro ao salvar imagem:', error);
        }
      }
    });
  }

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../images/Meeting_logo.png')} 
        style={styles.img}
      />
      <Text style={styles.titulo}>Cadastro de Fornecedores</Text>
      {/* Inputs para os dados do fornecedor */}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#696969"
        value={nome}
        onChangeText={text => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        placeholderTextColor="#696969"
        value={endereco}
        onChangeText={text => setEndereco(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contato"
        placeholderTextColor="#696969"
        value={contato}
        onChangeText={text => setContato(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Categoria"
        placeholderTextColor="#696969"
        value={categoria}
        onChangeText={text => setCategoria(text)}
      />
      {/* Botão para abrir o álbum */}
      <TouchableOpacity
        onPress={anexarImagem}
        style={styles.btn}
      >
        <View style={styles.btnArea}>
          <Text style={styles.btnText}> ANEXAR IMAGEM </Text>
        </View>
      </TouchableOpacity>

      {/* Botão de cadastro */}
      <TouchableOpacity 
        style={styles.btn}
        onPress={CadastroFornecedor}
      >
        <View style={styles.btnArea}>
          <Text style={styles.btnText}> CADASTRAR FORNECEDOR </Text>
        </View>
      </TouchableOpacity>
      {/* Botão para voltar */}
      <TouchableOpacity 
        style={styles.btn2}
        onPress={ () => navigation.goBack() }
      >
        <View style={styles.btnArea2}>
          <Text style={styles.btnText2}> VOLTAR PARA HOME </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#778899',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  btn: {
    margin: 5,
    width: 220,
    height: 40,
    borderColor: '#191970',
    borderWidth: 2,
    borderRadius: 10,
  },
  btnArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191970',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  btn2: {
    margin: 5,
    width: 220,
    height: 40,
    borderColor: '#dcdcdc',
    borderWidth: 2,
    borderRadius: 10,
  },
  btnArea2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dcdcdc',
  },
  btnText2: {
    color: 'black',
    fontWeight: 'bold',
  },
  img: {
    width: 130,
    height: 130,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 35,
    color: '#191970',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',  
  },
});

