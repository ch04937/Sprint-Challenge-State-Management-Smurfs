import React from 'react';

const Smurf = props => {
    return(
        <div>
            <h4>{props.smurf.name}</h4>
            <p>Years: {props.smurf.age} </p>
            <p>height: {props.smurf.height}</p>
        </div>
    )
}
export default Smurf;