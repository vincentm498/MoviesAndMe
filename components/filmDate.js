import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class filmDate extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text style={styles.title_text}>Sorti le 00/00/0000</Text>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
  },
  title_text: {
    textAlign:'right',
    padding:15
  }
})

export default filmDate