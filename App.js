import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const baseUrl = 'https://api.otaviolube.com/api/filmes?populate=*';

  useEffect(function(){
    fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setFilmes(data.data);
    })
    .catch(error => console.error(error));
  }, []);

  const img_path = 'https://api.otaviolube.com';
  function TitleBar({title}) {
    return (
      <View style={styles.titleBar}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewDados}>
        {filmes.length > 0 ? (
          filmes.map(filme => (
            <View key={filme.id} style={styles.filmeContainer}>
              <View style={styles.viewImagem}>
                <Image style={styles.poster} source={{ uri: `${img_path}${filme.attributes.poster.data.attributes.formats.thumbnail.url}` }} />
              </View>
              <View style={styles.descript}>
                <Text style={styles.title}>{filme.attributes.titulo}</Text>
                <View style={{ flexWrap: 'wrap' }}>
                  <Text numberOfLines={9} style={styles.sinopse}>{filme.attributes.sinopse}</Text>
                </View>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.loading}>Carregando...</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
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