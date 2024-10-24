import css from "./ImageGallery.module.css";
import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem" 

const ImageGallery = ({pictures}) => {
  return <ul className={css.ImageGallery}>
    {pictures.map(pic=>(
      <li key={pic.id}>
        <ImageGalleryItem link = {pic.webformatURL} name={pic.tags} largeImageURL={pic.largeImageURL}/>
      </li>
    ))}
  </ul>;
};

export default ImageGallery;
