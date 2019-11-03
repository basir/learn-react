import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput';
import OwnerInput from './OwnerInput';
import CvvInput from './CvvInput';
import ExpirationDateInput from './ExpirationDateInput';

class CreditCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardNumber: '',
      owner: '',
      cvv: '',
      expirationMonth: '',
      expirationYear: '',
      isValid: false
    };

    this.baseState = {
      cardNumber: '',
      owner: '',
      cvv: '',
      expirationMonth: '',
      expirationYear: '',
      isValid: false
    };
  }

  handleCardNumber = event => {
    event.preventDefault();

    const { value } = event.target;
    const maxLength = 16;
    // console.log(value);

    this.setState({
      cardNumber: value
    });

    value.length !== maxLength
      ? this.setState({ isValid: true })
      : this.setState({ isValid: false });
  };

  handleOwner = event => {
    event.preventDefault();

    this.setState({ owner: event.target.value });
  };

  handleCvv = event => {
    event.preventDefault();

    this.setState({
      cvv: event.target.value
    });
    // console.log('Cvv: ', event.target.value);
  };

  handleMonth = event => {
    event.preventDefault();
    this.setState({
      expirationMonth: event.target.value
    });
  };

  handleYear = event => {
    event.preventDefault();
    this.setState({
      expirationYear: event.target.value
    });
  };

  checkFormData = () => {
    //alert(JSON.stringify(this.state, null, 4));
    let {
      cardNumber,
      owner,
      cvv,
      expirationMonth,
      expirationYear
    } = this.state;
    if (
      cardNumber.length === 16 &&
      owner !== '' &&
      (cvv.length === 3 || cvv.length === 4) &&
      expirationMonth !== '' &&
      (expirationYear.length === 4 && expirationYear < 2019)
    ) {
      return true;
    } else {
      return false;
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log();
    if (this.checkFormData() === true) {
      alert(JSON.stringify(this.state, null, 4));
    } else {
      alert('Error!!!');
    }
  };

  render() {
    //console.log(this.state);
    return (
      <div>
        <h1>CreditCardForm</h1>
        {/* <input type="date" onChange={e => console.log(e.target.value)} /> */}
        <CardNumberInput
          isValid={this.state.isValid}
          handleCardNumber={this.handleCardNumber}
        />
        <OwnerInput
          handleOwner={this.handleOwner}
          numberEmpty={this.state.cardNumber}
        />
        <CvvInput handleCvv={this.handleCvv} cvv={this.state.cvv} />
        <ExpirationDateInput
          handleMonth={this.handleMonth}
          handleYear={this.handleYear}
          expirationYear={this.state.expirationYear}
          expirationMonth={this.state.expirationMonth}
        />
        <button
          type="submit"
          disabled={!this.checkFormData()}
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default CreditCardForm;
