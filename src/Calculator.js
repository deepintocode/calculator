import React, { Component } from 'react';
import Buttons from './components/Buttons';
import Display from './components/Display';

import './Calculator.css';

class Calculator extends Component {
  state = {
    result: '',
    expression: '',
    currentNumber: '',
  }
  handleButton = (e) => {
    const button = e.target.textContent;
    this.setState((prevState) => {
      if(button === 'Clear'){
        return { 
          result: '', 
          expression: '',
          currentNumber: '',
        };
      }
      if(button === '=' && prevState.expression.substr(-1).match(/[\/\+\-\*]/)) {
        return;
      }
      if(button === '=') {
        return { 
          result: eval(prevState.expression), 
          expression: '',
          currentNumber: '',
        };
      }
      // Force numbers to not start with zero
      if((button === '0' && prevState.expression.length === 0) || (button === '0' && prevState.expression.match(/[\/\+\-\*]/))){
        return;
      }
      // Forbid two consecutive operators
      if(button.match(/[\/\+\-\*]/) && prevState.expression.substr(-1).match(/[\+\-\*\/]/)) {
          return;
      }
      if(button.match(/[\/\+\-\*]/)) {
        return { 
          currentNumber: prevState.expression,
          expression: prevState.expression + button,
        };
      } else {
        return {
          expression: prevState.expression + button,
          currentNumber: prevState.expression + button,
        };
      }
      // if(button === '.' && prevState.expression.substr(prevState.expression - 1) === '.'){
      //   return;
      // }
      // if(this.state.lastNumber.indexOf('.') !== 1 )
      // return {
      //   expression: prevState.expression + button,
      //   currentNumber: prevState.expression + button,
      // };
    });
  }
  render() {
    return (
      <div className="Calculator">
        <Display result={this.state.result} expression={this.state.expression}/>
        <Buttons handleButton={this.handleButton}/>
      </div>
    );
  }
}



export default Calculator;
