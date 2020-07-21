import React, { useState, useRef, useReducer, Component } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";

// Import @tensorflow/tfjs-core
import '@tensorflow/tfjs-core';
// Adds the CPU backend to the global backend registry.
import '@tensorflow/tfjs-backend-cpu';

import '@tensorflow/tfjs-backend-webgl';

import '@tensorflow/tfjs-layers'

import '@tensorflow/tfjs-converter'

import '@tensorflow/tfjs-data'

const img = require('../img/fotoseg.jpg');
(async () => {
  const path = "mobilenet/model.json"
  const mn = new mobilenet.MobileNet(1, 1);
  mn.path = `https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_1.0_224/model.json`;
  await mn.load()
  // all of the script.... 

})();


export default class Welcome extends React.Component {



  render() {  
    return <h1>Hello, {this.props.name}</h1>;
  }
}