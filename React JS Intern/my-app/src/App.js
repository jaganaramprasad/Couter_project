import React, { useState } from 'react';
import './App.css';
import CircleButton from './components/CircleButton';
import A from './components/A';
import ButtonWithBooleanValue from './components/ButtonWithBooleanValue';

function App() {
  const [isRed, setIsRed] = useState(true);

  const handleButtonClick = () => {
    setIsRed(!isRed);
  };

  return (
    <div className="App">
      <h1>React Project</h1>
      <CircleButton />
      <br/>
      {/* <A /> */}
     
    

      <ButtonWithBooleanValue isRed={isRed} handleButtonClick={handleButtonClick} />
    
    </div>
  );
}

export default App;
