import React from 'react';

function CvvInput(props) {
  const { handleCvv, isValid } = props;

  return (
    <div>
      <label>
      CvvInput: 
      <input
        type="number"
        onChange={handleCvv}
        style={{
          borderColor: !isValid ? 'red' : null,
          borderWidth: '2px'
        }}
      />
      </label>
    </div>
  );
}

export default CvvInput;
