import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './filmItem'
import {getFilmsFromApiWithSearchedText} from '../API/TMDBApi'


class Search extends React.Component {

  constructor(props){
    super(props)
    this.state = { 
      films:[],
      
    }
    this.serchedText =  ""
  }

_loadFilms(){
  if(this.serchedText.length > 0){
    getFilmsFromApiWithSearchedText(this.serchedText).then(data => this.setState({ films : data.results }))
  }
  
}

_searchTextInputChanged(text){
  this.serchedText = text
}

  render() {
    return (
      <View style={styles.main_container}>
        <TextInput onSubmitEditing={() => this._loadFilms()} onChangeText={(text) => this._searchTextInputChanged(text)} style={styles.textinput} placeholder='Titre du film'/>
        <Button title='Rechercher' onPress={() => this._loadFilms()}/>

        <FlatList
            data={this.state.films}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <FilmItem film={item}/>}
        />
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Search