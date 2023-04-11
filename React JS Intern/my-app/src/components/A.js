import React, { useState } from 'react';
import B from './B';

function A() {
  const [cendol, setCendol] = useState(2);

  const handleButtonClick = () => {
    setCendol(cendol + 10);
  };

  return (
    <div>
      <h2>Component A</h2>
      <p>Value of cendol: {cendol}</p>
      <B cendol={cendol} handleButtonClick={handleButtonClick} />
    </div>
  );
}

export default A;
