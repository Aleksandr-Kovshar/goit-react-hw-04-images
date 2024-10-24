import React, { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import * as API from "../src/services/pixabay-api";
import { Hourglass } from 'react-loader-spinner';


class App extends Component {
  state = {
    pictureName: "",
    pictures: [],
    page: 1,
    totalHits:0,
    loading: false,
  };
  

  handleClickButton=async()=>{
    const newpage=this.state.page+1;
    console.log(newpage);
    try {
      const apiPictures = await API.getPictures(this.state.pictureName, newpage);
      this.setState((state)=>({ pictures: [...state.pictures, ...apiPictures.hits ], page: newpage}));
      console.log(apiPictures.hits );
    } catch (error) {
      console.log(error);
    }
  }
 
  handleFormSubmit = async (pictureName) => {
    console.log(pictureName);
    this.setState({ pictureName,  page: 1, loading: true});

    try {
      const apiPictures = await API.getPictures(pictureName, 1);
      this.setState({ pictures: apiPictures.hits, totalHits: apiPictures.totalHits, loading: false});
      console.log(apiPictures.hits );
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Searchbar onSubmit ={this.handleFormSubmit}/>
        {this.state.loading&&<Hourglass visible={true} wrapperStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} wrapperClass="my-custom-loader"/>}
        {this.state.pictures&&<ImageGallery pictures={this.state.pictures}/>}
        {this.state.pictures.length > 0 && this.state.pictures.length < this.state.totalHits&&<Button onClick={this.handleClickButton}/>}
      </>
    );
  }
}

export default App;
