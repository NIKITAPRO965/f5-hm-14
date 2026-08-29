

import { Component } from 'react'
import Searchbar from './components/Searchbar/Searchbar'
import Loader from './components/Loader/Loader'
import Button from './components/Button/Button'
import { fetchImages } from './Appi'
import './App.css'

class App extends Component{

  state = {
    images: [],
    query: "",
    page: 1,
    loading: false,
    selectedImage: null,
  }

  componentDidUpdate(_,prevState) {
    if(prevState.query!== this.state.query){
      fetchImages(query, page).then(data => console.log(data.hits))
    }
  } 

  handleSearch = (query) => {
    this.setState({
      query: query,
      images: [],
      page: -1,
    })
    
  }

  render() {


    return(<>    
    <Searchbar onSearch={this.handleSearch}/>
    <Loader />
    <Button />
    
    </>)
  }
}

export default App
