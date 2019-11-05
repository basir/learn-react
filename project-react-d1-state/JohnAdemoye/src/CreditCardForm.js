import React, { Component } from "react";
import CardNumberInput from "./CardNumberInput";
import OwnerInput from "./OwnerInput";
import CvvInput from "./CvvInput";
import ExpirationYearInput from "./ExpirationYearInput";
import ExpirationMonthInput from "./ExpirationMonthInput";

class CreditCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: "",
      owner: "",
      cvv: "",
      expirationMonth: "",
      expirationYear: "",
      isCardNumberValid: false,
      isOwnerValid: false,
      isCvvValid: false,
      isExpirationMonthValid: false,
      isExpirationYearValid: false
    };
  }

  handleCardNumber = event => {
    const { value } = event.target;
    this.setState({
      cardNumber: value,
      isCardNumberValid: value.length === 16
    });
  };

  handleOwner = event => {
    const { value } = event.target;
    this.setState({ owner: event.target.value });
    this.setState({
      cardNumber: value,
      isOwnerValid: value !== ""
    });
  };

  handleCvv = event => {
    const { value } = event.target;
    this.setState({
      cvv: value,
      isCvvValid: value.length === 4 || value.length === 3
    });
  };

  handleMonth = event => {
    const { value } = event.target;
    this.setState({
      expirationMonth: value,
      isExpirationMonthValid: !!value
    });
  };

  handleYear = event => {
    const { value } = event.target;
    this.setState({
      expirationYear: value,
      isExpirationYearValid: value.length === 4 && value >= 2019
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert("Send data to sever: " + JSON.stringify(this.state));
  };

  render() {
    return (
      <div>
        <h1>Enter Cerdit Card</h1>
        <CardNumberInput
          handleCardNumber={this.handleCardNumber}
          isValid={this.state.isCardNumberValid}
        />
        <OwnerInput
          handleOwner={this.handleOwner}
          isValid={this.state.isOwnerValid}
        />
        <CvvInput handleCvv={this.handleCvv} isValid={this.state.isCvvValid} />
        <ExpirationYearInput
          handleYear={this.handleYear}
          isValid={this.state.isExpirationYearValid}
        />
        <ExpirationMonthInput
          handleMonth={this.handleMonth}
          isValid={this.state.isExpirationMonthValid}
        />
        <button
          type="submit"
          disabled={
            !this.state.isCardNumberValid ||
            !this.state.isOwnerValid ||
            !this.state.isCvvValid ||
            !this.state.isExpirationYearValid ||
            !this.state.isExpirationMonthValid
          }
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default CreditCardForm;
