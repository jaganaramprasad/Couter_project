import React from 'react';

function B(props) {
  const { cendol, handleButtonClick } = props;

  return (
    <div>
      <h2>Component B</h2>
      <p>Value of cendol received from Component A: {cendol}</p>
      <button onClick={handleButtonClick}>Increment by 10</button>
    </div>
  );
}

export default B;
