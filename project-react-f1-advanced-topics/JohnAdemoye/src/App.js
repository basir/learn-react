import React, { Fragment } from 'react';

import SearchFilter from './SearchFilter';
import SearchResult from './SearchResult';
import SearchSummary from './SearchSummary';

const items = ['id', 'name', 'price', 'inStock'];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <SearchResult />
        <SearchFilter />
        <SearchSummary />
      </Fragment>
    );
  }
}
