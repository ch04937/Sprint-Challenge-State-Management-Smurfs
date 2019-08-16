import React from "react";
import "./App.css";

import SmurfList from './components/SmurfList';
import FormikSmurfForm from './components/SmurfForm';


function App() {
    return (
      <div className="App">
        
        <FormikSmurfForm />
        <SmurfList />
      </div>
    );
  }

export default App;
