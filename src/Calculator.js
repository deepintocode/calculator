import React, { Component } from 'react';
import Buttons from './components/Buttons';
import Display from './components/Display';

import './Calculator.css';

class Calculator extends Component {
  state = {
    result: 0,
    expression: '',
    currentNumber: '',
    dotAllowed: true,
  }
  handleButton = (e) => {
    const button = e.target.textContent;
    this.setState((prevState) => {
      if(button === 'Clear'){
        return { 
          result: 0, 
          expression: '',
          currentNumber: true,
          dotAllowed: true,
        };
      }
      if(button === '=' && prevState.expression.substr(-1).match(/[\/\+\-\*]/)) {
        return;
      }
      if(button === '=') {
        return { 
          result: eval(prevState.expression),
          currentNumber: '=',
        };
      }
      // When inputting numbers, the calculator does not allow a number to begin with multiple zeros.
      if((button === '0' && prevState.expression.length === 0) || (button === '0' && prevState.expression.match(/[\/\+\-\*]/))){
        return;
      }
      // Pressing an operator immediately following = starts a new calculation 
      // that operates on the result of the previous evaluation.
      if(button.match(/[\/\+\-\*]/) && prevState.currentNumber === '=') {
        return {
          currentNumber: true,
          expression: prevState.result + button,
          result: prevState.result + button,
          dotAllowed: true,
        };
      }
      // If 2 or more operators are entered consecutively, the operation performed is the last operator entered.
      if(button.match(/[\/\+\-\*]/) && prevState.expression.substr(-1).match(/[\+\-\*\/]/)) {
        if(this.state.expression.length === 1 && button.match(/[\/\*]/)) {
          return;
        }
          return { expression: prevState.expression.substr(0, prevState.expression.length - 1) + button };
      }
      if(button.match(/[\/\*]/) && this.state.expression === '') {
        return;
      }
      // When the decimal element is clicked, a . appendσ to the currently displayed value; two . in one number αρε not accepted.
      if(this.state.dotAllowed === false && button === '.') {
        return;
      }
      if(button === '.') {
        return {
          currentNumber: true,
          expression: prevState.result + button,
          result: prevState.result + button,
          dotAllowed: false,
        }
      }
      if(button.match(/[\/\+\-\*]/)) {
        return { 
          currentNumber: true,
          expression: prevState.expression + button,
          result: prevState.expression + button,
          dotAllowed: true,
        };
      } else {
        return {
          currentNumber: true,
          expression: prevState.expression + button,
          result: prevState.expression + button,
        };
      }
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
