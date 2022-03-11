import React, { useState } from "react";
import SubmitInput from "./Components/SubmitInput";
import './App.css';

function App() {
  // const onSubmit = (value) => {
  //   sendInput(value);
  //   console.log({value})
  // };

  return (
    <div className="App">
      <h1>Create Your imgix Image</h1>
      <SubmitInput 
      // sendInput={onSubmit}
      />
    </div>
  );
}

export default App;
