import React from 'react'
import { StyleSheet, View } from 'react-native'


class FilmImage extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    width:150,
    backgroundColor: 'gray',
    margin:5

  }
})

export default FilmImage