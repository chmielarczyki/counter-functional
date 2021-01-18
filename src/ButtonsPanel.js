import React from 'react';
import './ButtonsPanel.css';

const ButtonsPanel = (props) => {

    return(
        <div className='buttons-panel'>
            <button onClick={() => {props.buttonMethod('add');}}>Add {props.stepValue}</button>
            <button onClick={() => {props.buttonMethod('reinit');}}>ReInit</button>
            <button onClick={() => {props.buttonMethod('reset');}}>Reset</button>
        </div>
    );
}

export default ButtonsPanel;