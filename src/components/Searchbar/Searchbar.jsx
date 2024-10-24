import css from "./Searchbar.module.css";
import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    pictureName: "",
  };


  handleChange = (e) => {
    const {value } = e.currentTarget;
    this.setState({ pictureName: value });
  };

  handelSubmit = e =>{
    e.preventDefault();
    this.props.onSubmit(this.state.pictureName);
    this.setState({pictureName: ""});
  }

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handelSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.ButtonLabel}></span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder=" Search images and photos"
            onChange={this.handleChange}
            value={this.state.pictureName}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
