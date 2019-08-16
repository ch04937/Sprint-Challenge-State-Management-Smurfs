import React from 'react';

import './smurfCards.css';

const Smurf = props => {
    return(
        <div className='smurf-cards'>
            <h4>{props.smurf.name}</h4>
            <p>Years: {props.smurf.age} </p>
            <p>height: {props.smurf.height}</p>
        </div>
    )
}
export default Smurf;