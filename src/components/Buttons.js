import React from 'react';
import './Buttons.css';

const Buttons = (props) =>  (
    <div className="buttons" onClick={props.handleButton}>
        <div id="clear">Clear</div>
        <div id="equals">=</div>
        <div id="seven">7</div>
        <div id="eight">8</div>
        <div id="nine">9</div>
        <div id="divide">/</div>
        <div id="four">4</div>
        <div id="five">5</div>
        <div id="six">6</div>
        <div id="multiply">*</div>
        <div id="one">1</div>
        <div id="two">2</div>
        <div id="three">3</div>
        <div id="subtract">-</div>
        <div id="zero">0</div>
        <div id="decimal">.</div>
        <div id="add">+</div>
    </div>
);

export default Buttons;