import React from 'react';

function OwnerInput(props) {
  const { handleOwner, isValid } = props;

  return (
    <div>
      <label>
      Owner : 
      <input
        type="text"
        onChange={handleOwner}
        style={{
          borderColor: !isValid ?   'red' : '',
          borderWidth: '2px'
        }}
      />
      </label>
    </div>
  );
}

export default OwnerInput;
