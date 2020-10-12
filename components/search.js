import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './filmItem'
import {getFilmsFromApiWithSearchedText} from '../API/TMDBApi'


class Search extends React.Component {

  constructor(props){
    super(props)
    this.state = { 
      films:[],
      isLoading: false
      
    }
    this.serchedText =  ""
  }

_loadFilms(){
  this.setState({ isLoading:true })
  if(this.serchedText.length > 0){
    getFilmsFromApiWithSearchedText(this.serchedText).then(data =>
       this.setState({ 
         films : data.results,
         isLoading:false
        })
    )
  }
}

_displayLoading(){
  if(this.state.isLoading){
    <View style={styles.loadingContainer}>
        <ActivityIndicator size='large'/>
    </View>
  }
}

_searchTextInputChanged(text){
  this.serchedText = text
}

  render() {
    console.log(this.state.isLoading)
    return (
      <View style={styles.main_container}>
        <TextInput onSubmitEditing={() => this._loadFilms()} onChangeText={(text) => this._searchTextInputChanged(text)} style={styles.textinput} placeholder='Titre du film'/>
        <Button title='Rechercher' onPress={() => this._loadFilms()}/>

        <FlatList
            data={this.state.films}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <FilmItem film={item}/>}
        />
        {this._displayLoading()}
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  loadingContainer:{
    position: "absolute",
    left: 0,
    right:0,
    top: 100,
    bottom: 0,
    alignItems:"center",
    justifyContent: "center"
  },
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