import React from 'react';
import './Step.css';

const Step = (props) => {

    return (
        <div className='step'>

            Step: <input onChange = {(event) => {
                if (props.stepValue >= 1 ) {
                    props.changeStepMth(+event.target.value)
                }
            }}
                type="number" value={props.stepValue} />
        </div>
    );

}

export default Step;