import React from 'react';
import './Display.css';

const Display = (props) => (
    <div id="display">
        <p>Result: {props.result}</p>
        <p>Expression: {props.expression}</p>
    </div>
);

export default Display;