import React from 'react';
import './Display.css';

const Display = (props) => (
    <div id="panel">
        <p id="display">{props.result}</p>
    </div>
);

export default Display;