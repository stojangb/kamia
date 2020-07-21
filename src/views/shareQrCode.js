import * as ReactDOM from "react-dom";
import React, { Component } from 'react';
var QRCode = require('qrcode.react');




ReactDOM.render(<QRCode value="http://facebook.github.io/react/" />, document.getElementById('root'));



class Help extends Component {
  render() {
         return (
              <div>
                 <QRCode value="http://facebook.github.io/react/" /> 
              </div>
      );
  }
}

export default Help;