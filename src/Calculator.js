import React, { Component } from 'react';
import Buttons from './components/Buttons';
import Display from './components/Display';

import './Calculator.css';

class Calculator extends Component {
  state = {
    result: 0,
    display: '',
    operation: '',
  }
  handleButton = (e) => {
    const button = e.target.textContent;
    // console.log(button);
    // this.handleOperation(button);
    this.setState((prevState) => {
      if( button === '=') {
        return { display: eval(prevState.display) };
      }
      console.log(prevState.display)
      return {display: prevState.display + button};
    });
  }
  // handleOperation(operation) {
  //   switch(operation) {
  //     case '+':
  //       this.setState({ operation: 'add' });
  //       break;
  //     case '-':
  //       this.setState({ operation: 'subtract' });
  //       break;
  //     case '*':
  //       this.setState({ operation: 'multiply' });
  //       break;
  //     case '/':
  //       this.setState({ operation: 'divide' });
  //       break;
  //     default:
  //       return;
  //   }
  // }
  render() {
    return (
      <div className="Calculator">
        <Display display={this.state.display}/>
        <Buttons handleButton={this.handleButton}/>
      </div>
    );
  }
}



export default Calculator;
