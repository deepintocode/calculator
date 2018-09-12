import React, { Component } from 'react';
import Buttons from './components/Buttons';

import './Calculator.css';

class Calculator extends Component {
  render() {
    return (
      <div className="Calculator">
        <Buttons />
      </div>
    );
  }
}



export default Calculator;
