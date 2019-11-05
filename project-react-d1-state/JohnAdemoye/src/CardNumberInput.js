import React from 'react';

function CardNumberInput(props) {
  const {   isValid, handleCardNumber } = props;
  return (
    <div>
      <label>
      Card Number : 
      <input 
        onChange={handleCardNumber}
        type="text"
        maxLength="16"
        style={{ borderColor: !isValid ? 'red' : '', borderWidth: '2px' }}
      /> 
      </label>
      
    </div>
  );
}

export default CardNumberInput;
