import React from "react";
import "./App.scss";

import Smurfs from './Smurfs.js';
import SmurfForm from './SmurfForm.js'
import { getSmurfs, addSmurfs } from '../actions/index.js';

import { connect } from 'react-redux';


const App = props => {
  
  return(
    <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className='smurf-wrapper'>
          <Smurfs getSmurfs={props.getSmurfs} smurfs={props.smurfs} isFetching={props.isFetching} />
        </div>
        
        <SmurfForm addSmurfs={props.addSmurfs} />
      </div>
  )
}



const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  }
}

const mapDispatchToProps = { getSmurfs, addSmurfs };

export default connect(mapStateToProps, mapDispatchToProps)(App);
