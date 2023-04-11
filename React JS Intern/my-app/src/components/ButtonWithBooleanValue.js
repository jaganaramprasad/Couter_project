import React from 'react';
import '../style.css'
function ButtonWithBooleanValue(props) {
  const { isRed, handleButtonClick } = props;

  return (
    <div>
      <button variant="primary"
        onClick={handleButtonClick}
        style={{ backgroundColor: isRed ? 'red' : 'blue' }}
      >
        {isRed ? 'Red Button' : 'Blue Button'}
      </button>
    </div>
  );
}

export default ButtonWithBooleanValue;
