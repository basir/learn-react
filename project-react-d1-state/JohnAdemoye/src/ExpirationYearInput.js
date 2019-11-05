import React from "react";

function ExpirationYearInput(props) {
  const { handleYear, isValid } = props;
  return (
    <div>
      <label>
        Expiration Year:
        <input
          type="number"
          onChange={handleYear}
          style={{
            borderColor: !isValid ? "red" : "",
            borderWidth: "2px"
          }}
        />
      </label>
    </div>
  );
}

export default ExpirationYearInput;
