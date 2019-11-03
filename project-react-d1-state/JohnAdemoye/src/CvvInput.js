import React from 'react';

function CvvInput(props) {
  const { handleCvv, cvv } = props;
  let boolBg;
  // console.log(cvv.length);
  if (cvv.length === 4 || cvv.length === 3) {
    boolBg = true;
  }

  return (
    <div>
      CvvInput:{' '}
      <input
        type="number"
        onChange={handleCvv}
        style={{
          borderColor: !boolBg ? 'red' : null,
          borderWidth: '2px'
        }}
      />
    </div>
  );
}

export default CvvInput;
