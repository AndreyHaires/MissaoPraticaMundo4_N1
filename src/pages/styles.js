import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#778899',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  area: {
    flex: 1,
    backgroundColor:'#778899',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 200,
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
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  miniLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    marginLeft: 20,
  },
  itemContent: {
    flex: 1,    
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,    
  },
  btnLista: {
    backgroundColor: '#191970',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
},
});
