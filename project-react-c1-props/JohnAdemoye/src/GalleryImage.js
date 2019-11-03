import React, { Component } from "react";

export default class GalleryImage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <img src={this.props.image.photo} alt={this.props.image.name} />;
  }
}
