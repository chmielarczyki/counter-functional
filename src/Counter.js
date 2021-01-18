import React, { useState } from 'react';
import './Counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import Clock from './Clock';
import Step from './Step';

const Counter = (props) => {

    const [counterVlaue, setCounterVlaue] = useState(props.initValue);

    const [showClock, setShowClock] = useState(true);

    const [step, setStep] = useState(1);

    const changeValue = (action) => {

        setCounterVlaue((prevCounterVlaue) => {

            let currentCounterValue = prevCounterVlaue;

            if (action === 'add') {
                currentCounterValue += step;
            } else if (action === 'reinit') {
                currentCounterValue = props.initValue;
            } else {
                currentCounterValue = 0;
            }
            
            return (
                currentCounterValue
            );
        })        
    }

    // pokazywanie zegara

    const toggleClock = () => {
        setShowClock(prevShowClock => !prevShowClock)
    }
    
    let clockElement = '';

    if (showClock === true) {
        clockElement = <Clock toggleClockMethod={toggleClock} />;
    } else {
        clockElement = <span className='show-clock' onClick={toggleClock}>show clock</span>
    }

    const changeStep = (newValue) => {
        console.log(newValue);
        setStep(newValue);
    }

    return (
        <div className='counter'>
            Counter:
            <Display displayValue={counterVlaue} />
            <ButtonsPanel buttonMethod={changeValue} stepValue={step} />
            {clockElement}
            <Step changeStepMth={changeStep} stepValue={step} />
        </div>
    );
}

export default Counter;