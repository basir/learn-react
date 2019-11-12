import React, { Fragment } from 'react';

function Post(props) {
  const { title, body, userId } = props;
  return (
    <Fragment>
      <p>{userId}</p> <h1>{title}</h1>
      <p>{body}</p>
    </Fragment>
  );
}

export default Post;
