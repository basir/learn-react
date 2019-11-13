import React, { Fragment } from "react";

import Post from "./Post";
import Summary from "./Summary";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => this.setState({ posts: data }));
  }

  fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => this.setState({ posts: data }));
  };

  render() {
    //console.log(this.state.posts);

    return (
      <Fragment>
        <Summary num={this.state.posts.length} fetchData={this.fetchData} />
        <ul>
          {this.state.posts &&
            this.state.posts.map(post => (
              <li key={post.id}>
                <Post userId={post.id} title={post.title} body={post.body} />
              </li>
            ))}
        </ul>
      </Fragment>
    );
  }
}
