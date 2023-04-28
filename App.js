import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import styles from './src/components/styles'

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