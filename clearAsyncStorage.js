import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Button, View, Text } from 'react-native';

const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Dados do AsyncStorage foram limpos com sucesso.');
  } catch (error) {
    console.error('Erro ao limpar dados do AsyncStorage:', error);
  }
};

const ClearDataButton = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Limpar Dados do AsyncStorage"
        onPress={clearAsyncStorage}
      />
    </View>
  );
};

export default ClearDataButton;
