import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import FilmImage from './filmImage'
import FilmDescription from './filmDescription'
import FilmDate from './filmDate'

class FilmItem extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <FilmImage/>
        <View style={styles.container_text}>
          <Text style={styles.title_text}>Titre du film</Text>
          <FilmDescription/>
          <FilmDate/>
        </View>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height:250,
    flexDirection:'row',
    padding: 5
  },
  title_text: {
    padding: 15
  },
  container_text:{
    flex: 1,
    justifyContent: 'space-between'
  }
})

export default FilmItem