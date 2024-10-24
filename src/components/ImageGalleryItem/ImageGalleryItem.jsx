import css from "./ImageGalleryItem.module.css";
import React, { Component } from "react";
import Modal from "../Modal";

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = (e) => {
    this.setState({ isModalOpen: true });
    
  };

  closeModal = (e) => {
    if (e.currentTarget === e.target) {
      this.setState({ isModalOpen: false });
    }
  };

  componentDidMount() {
    console.log("Modal componentDidMount");
    window.addEventListener("keydown", this.handleKeyDown);
  };
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      console.log("Нажали на Escape");
      this.setState({ isModalOpen: false });
    }
  };

  render() {
    const { link, name, largeImageURL   } = this.props;
    return (
      <>
        <div className={css.ImageGalleryItem} onClick={this.openModal}>
          <img src={link} alt={name} />
          
        </div>
        {this.state.isModalOpen && (
          <Modal handleBackdropClick={this.closeModal} largeImageURL={largeImageURL }/>
        )}
      </>
    );
  }
}

// const  ImageGalleryItem = ({link, name})=>{
//   return(
//     <li className={css.ImageGalleryItem}>
//   <img src={link} alt={name}/>
//   <Modal/>
// </li>
//   )
// }

export default ImageGalleryItem;
