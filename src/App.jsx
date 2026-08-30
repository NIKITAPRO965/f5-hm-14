

import { Component } from 'react'
import Searchbar from './components/Searchbar/Searchbar'
import Loader from './components/Loader/Loader'
import Button from './components/Button/Button'
import ImageGallery from './components/ImageGallery/ImageGallery'
import { fetchImages } from './appi'
import './App.css'

class App extends Component{

  state = {
    images: [],
    query: "",
    page: 1,
    loading: false,
    selectedImage: null,
  }


  // componentDidMount(){
  //   fetchImages("cat", page=1).then(res => console.log(res))
  // }

  componentDidUpdate(_,prevState) {
    if(prevState.query!== this.state.query){
      this.loadImg()
    }
    
  } 


  loadImg = () => {
    const {query, page} = this.state
    if(!query) {
      return
    }

    this.setState({
      loading: true
    })

    fetchImages(query, page).then((data) => {
      this.setState((prev)=>({
        images: [...prev.images, ...data.hits]
      }))
    }).finally(()=>{
      this.setState({
        loading: false
      })
    })

  }

  loadMore = () => {
  this.setState((prev) => ({
    page: prev.page+1
  })),
  ()=>{
    this.loadImg()
  }
}


  handleSearch = (query) => {
    this.setState({
      query: query,
      images: [],
      page: 1,
    })
    
  }

  render() {
console.log(this.state.images);
// console.log(this.state.query);


    return(<>    
    <Searchbar onSearch={this.handleSearch}/>
    {this.state.loading && <Loader />}
    <ImageGallery imgs={this.state.images}/>
    {this.state.images.length>0 && <Button onClick={this.loadMore}/>}
    
    </>)
  }
}

export default App
