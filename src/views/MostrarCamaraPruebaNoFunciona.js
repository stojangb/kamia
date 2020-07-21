import React, { useState, useRef, useReducer, Component } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

console.log("Paso 1 cargando página");

(async () => {
  // Load the model.
const model = await cocoSsd.load();
// Classify the image.
const predictions = await model.detect(require('../img/fotoseg.jpg'));

console.log('Predictions: ');
console.log(predictions);

  // all of the script.... 

})();


export default class Welcome extends React.Component {



  render() {  
    return <h1>Hello, {this.props.name}</h1>;
  }
}