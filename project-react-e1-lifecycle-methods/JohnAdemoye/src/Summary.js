import React, { Fragment } from "react";

import "./App.css";

class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: true
    };
  }

  componentWillReceiveProps(prevProps) {
    if (prevProps.num >= this.props.num) {
      this.setState({ bgColor: false });
    } else this.setState({ bgColor: false });
  }

  // Throw an error
  // componentDidUpdate(prevProps) {
  //   if (prevProps.num <= this.props.num) {
  //     this.setState({ bgColor: true });
  //   } else {
  //     this.setState({ bgColor: false });
  //   }
  // }

  render() {
    //console.log(this.props);

    return (
      <Fragment>
        <h1 className={`${this.state.bgColor ? "red" : "green"}`}>
          Number of posts: {this.props.num}
        </h1>
        <button onClick={this.props.fetchData}>Refresh</button>
      </Fragment>
    );
  }
}

export default Summary;
