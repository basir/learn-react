import React, { Fragment } from 'react';

import Post from './Post';
import Summary from './Summary';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }));
  }

  refreshPosts = () => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(data => this.setState({ posts: data }));
    window.location.reload();
  };

  render() {
    //console.log(this.state.posts);

    return (
      <Fragment>
        <Summary
          num={this.state.posts.length}
          refreshPosts={this.refreshPosts}
        />
        {this.state.posts &&
          this.state.posts.map(post => (
            <ul key={post.id}>
              <Post userId={post.id} title={post.title} body={post.body} />
            </ul>
          ))}
      </Fragment>
    );
  }
}
