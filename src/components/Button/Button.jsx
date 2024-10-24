import css from "./Button.module.css";
import React, { Component } from "react";

// Описание компонента <Button>
// При нажатии на кнопку Load more должна догружаться следующая порция изображений и рендериться вместе с предыдущими. 
// Кнопка должна рендерится только тогда, когда есть какие-то загруженные изобаржения. Если массив изображений пуст, кнопка не рендерится.

const Button = ({onClick}) => {

    return <button className={css.Button} onClick={onClick}>Load more</button>;
  };
  
  export default Button;