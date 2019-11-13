import React, { Fragment } from 'react';

class SearchFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="query"></label>
          <input type="text" placeholder="query" />
        </div>
        <div>
          <label htmlFor="minPrice"></label>
          <input type="text" placeholder="min price" />
        </div>
        <div>
          <label htmlFor="maxPrice"></label>
          <input type="text" placeholder="max price" />
        </div>
        <div>
          <label htmlFor="inStock"></label>
          <input type="text" placeholder="in stock" />
        </div>
      </Fragment>
    );
  }
}

export default SearchFilter;
