import { StyleSheet  } from 'react-native'


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
    },
  
    titleBar: {
      Flex: 1,
      height: 60,
      fontWeight: 'bold',
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    viewDados: {
      flex: 1,
      padding: 10,
    },
  
    filmeContainer: {
      flexDirection: 'column',
      flex: 1,
      height: 5,
      backgroundColor: '#F5F5F5',
      borderRadius: 2,
      borderWidth: 2,
      borderColor: '#E0E0E0',
      marginBottom: 10,
    },
  
    viewImagem: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    poster: {
      width: '100%',
      height: 130,
      resizeMode: 'contain',
    },
  
    descript: {
      flex: 1,
      padding: 10,
    },
  
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'Roboto',
      color: '#424242',
      textTransform: 'uppercase',
      marginBottom: 5,
    },
  
    sinopse: {
      fontSize: 16,
      textAlign: 'center',
      fontFamily: 'Arial',
      color: '#757575',
      lineHeight: 20,
      marginBottom: 10,
      numberOfLines: 5
    },
    
    loading: {
      fontSize: 21,
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'Roboto',
      color: '#fff',
    },
    
  });

export default styles;