import React from "react";
import "./App.css";

import SmurfList from './components/SmurfList';
import FormikSmurfForm from './components/SmurfForm';


function App() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <FormikSmurfForm />
        <SmurfList />
      </div>
    );
  }

export default App;
