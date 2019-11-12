import React, { Fragment } from 'react';

class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: true
    };
  }

  componentWillReceiveProps(prevProps) {
    // console.log(prevProps.num);
    // console.log(this.props.num);

    //   if (prevProps.num <= this.props.num) {
    //     setTimeout(this.setState({ bgColor: true }), 1000);
    //   }

    prevProps.num <= this.props.num
      ? setTimeout(this.setState({ bgColor: true }), 1000)
      : setTimeout(this.setState({ bgColor: false }), 1000);
  }

  render() {
    //console.log(this.props);

    return (
      <Fragment>
        <h1
          style={{
            backgroundColor: `${this.state.bgColor ? 'red' : 'lightgreen'}`
          }}
        >
          Number of posts: {this.props.num}
        </h1>
        <button onClick={this.props.refreshPosts}>Refresh</button>
      </Fragment>
    );
  }
}

export default Summary;
