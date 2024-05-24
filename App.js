import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BAButton from './component/BAButton ';
import BAInput from './component/BAInput';

const App = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (ev) => {
    setInputText(ev.target.value);

  };

  const btnClick = () => {
    console.log("Button Clicked");
  };

  return (
    <div className="container mt-5">
      <BAInput 
        onChange={handleInputChange} 
        placeholder="Enter Text" 
      />
      <BAButton 
        btnClick={btnClick} 
        className="btn btn-primary mt-2" 
        btnValue="Login" 
      />
      <p className="mt-3">Text: {inputText}</p>
    </div>
  );
};

export default App;
