import React from 'react';

function CardNumberInput(props) {
  const { isValid, handleCardNumber } = props;
  return (
    <div>
      CardNumberInput:{' '}
      <input
        onChange={handleCardNumber}
        type="text"
        style={{ borderColor: isValid ? 'red' : '', borderWidth: '2px' }}
      />
    </div>
  );
}

export default CardNumberInput;
