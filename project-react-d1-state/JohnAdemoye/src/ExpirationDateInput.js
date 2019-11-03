import React from 'react';

function ExpirationDateInput(props) {
  const { handleYear, handleMonth, expirationMonth, expirationYear } = props;
  let yearBool;
  if (expirationYear < 2019 && expirationYear.length === 4) {
    yearBool = true;
  }

  return (
    <div>
      ExpirationDateInput
      <div>
        Month:
        <select
          onChange={handleMonth}
          style={{
            borderColor: expirationMonth === '' ? 'red' : '',
            borderWidth: '2px'
          }}
        >
          <option value="">--Please choose an option--</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>
      <div>
        Year:{' '}
        <input
          type="number"
          onChange={handleYear}
          style={{
            borderColor: !yearBool ? 'red' : 'green',
            borderWidth: '2px'
          }}
        />
      </div>
    </div>
  );
}

export default ExpirationDateInput;
