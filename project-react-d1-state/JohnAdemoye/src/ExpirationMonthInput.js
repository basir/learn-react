import React from "react";

function ExpirationMonthInput(props) {
  const { handleMonth, isValid } = props;
  return (
    <div>
      <label>
        Expiration Month:
        <select
          onChange={handleMonth}
          style={{
            borderColor: !isValid ? "red" : "",
            borderWidth: "2px"
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
      </label>
    </div>
  );
}

export default ExpirationMonthInput;
