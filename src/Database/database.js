import SQLite from 'react-native-sqlite-storage';

const databaseName = 'Fornecedores.db';
const databaseVersion = '1.0';
const databaseDisplayName = 'Fornecedores - React Native';
const databaseSize = 200000; 

const db = SQLite.openDatabase(
  databaseName,
  databaseVersion,
  databaseDisplayName,
  databaseSize,
  () => {
    console.log('Banco de dados aberto com sucesso!');
  },
  error => {
    console.error('Erro ao abrir o banco de dados:', error);
  }
);

    // Criação da tabela de fornecedores
db.transaction(tx => {
  tx.executeSql(
    `CREATE TABLE IF NOT EXISTS Fornecedores (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      nome TEXT,
      endereco TEXT,
      contato TEXT,
      categoria TEXT,
      imagem TEXT
    );`,
    [],
    () => {
      console.log('Tabela de fornecedores criada com sucesso!');
    },
    error => {
      console.error('Erro ao criar a tabela de fornecedores:', error);
    }
  );
});

   // Função para armazenar um fornecedor no banco de dados
export const armazenarFornecedor = async (fornecedor) => {
  const { nome, endereco, contato, categoria, imagem } = fornecedor;
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO Fornecedores (nome, endereco, contato, categoria, imagem) VALUES (?, ?, ?, ?, ?)',
        [nome, endereco, contato, categoria, imagem],
        (_, result) => {
          console.log('Fornecedor cadastrado com sucesso:', result);
          resolve(true);
        },
        error => {
          console.error('Erro ao cadastrar fornecedor:', error);
          reject(false);
        }
      );
    });
  });
};

export default db;
