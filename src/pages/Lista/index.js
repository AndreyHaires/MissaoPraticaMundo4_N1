import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles';

export default function Lista({ route }) {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [fornecedores, setFornecedores] = useState([
    { id: 1, nome: 'Cometa', categoria: 'Eletrônicos', localizacao: 'São Paulo', logo: require('../../images/ForneceA_logo.png') },
    { id: 2, nome: 'Compre Bem', categoria: 'Alimentos', localizacao: 'Rio de Janeiro', logo: require('../../images/ForneceB_logo.png') },
    { id: 3, nome: 'Namoda', categoria: 'Moda', localizacao: 'Bahia', logo: require('../../images/ForneceC_logo.png') },
    // Adicione mais fornecedores conforme necessário
  ]);

  const handleSearch = () => {
    const filtered = fornecedores.filter(fornecedor =>
      fornecedor.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fornecedor.categoria.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fornecedor.localizacao.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Pesquisar por nome, categoria ou localização"
        placeholderTextColor="gray"
      />
      <TouchableOpacity style={styles.btnLista} onPress={handleSearch}>
        <Text style={styles.btnText}>Filtrar</Text>
      </TouchableOpacity>
      <FlatList
        data={filteredData.length > 0 ? filteredData : fornecedores}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Image source={item.logo} style={styles.miniLogo} />
            <View style={styles.itemContent}>
              <Text style={styles.itemText}>{item.nome}</Text>
              <Text style={styles.itemText}>{item.categoria}</Text>
              <Text style={styles.itemText}>{item.localizacao}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={{alignItems:"center", marginTop:100}}>
      <TouchableOpacity 
        style={styles.btn2}
        onPress={ () => navigation.goBack() }
      >
        <View style={styles.btnArea2}>
          <Text style={styles.btnText2}> VOLTAR PARA HOME </Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
}
