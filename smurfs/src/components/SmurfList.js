import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';

// import SmurfForm from './SmurfForm';
import Smurf from './Smurf'
import './smurfCards.css'

const SmurfList = props => {
    return(
        <>
        <div className='data-container'>
        <h1>Open Smurf APP</h1>
        <button 
        className='button'
        onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="Circles" color="#00BFFF" height="15" width="100" />
        ) : (
          'Get Smurf Data'
        )}
        </button>
        {props.smurf && 
        props.smurf.map(blue => <Smurf key={blue.name} smurf={blue} />)}
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return{
        isLoading: state.isLoading,
        smurf: state.smurf
    }
}

export default connect(
    mapStateToProps, { getData }
)(SmurfList)