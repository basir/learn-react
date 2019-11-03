import React from 'react';

function OwnerInput(props) {
  const { handleOwner, numberEmpty } = props;
  //console.log('Empty: ', numberEmpty);

  return (
    <div>
      OwnerInput:{' '}
      <input
        type="text"
        onChange={handleOwner}
        style={{
          borderColor: numberEmpty === '' ? 'red' : '',
          borderWidth: '2px'
        }}
      />
    </div>
  );
}

export default OwnerInput;
