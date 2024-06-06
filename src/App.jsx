import React, { Component } from "react";
import Carousel from "./components/Carousel";
import "./App.css";

import {images} from "./data/CarouselData";


export default class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Carousel items={images}/>
      </div>
    );
  }
}