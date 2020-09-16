import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class filmDescription extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text style={styles.title_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil illinc huc pervenit. Certe, nisi voluptatem tanti aestimaretis. Minime vero, inquit ille, consentit. Proclivi currit oratio.</Text>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
  },
  title_text: {
    textAlign:'left',
    padding: 15
  }
})

export default filmDescription