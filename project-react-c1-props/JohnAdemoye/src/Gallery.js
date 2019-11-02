import React, { Component } from "react";

import GalleryHeader from "./GalleryHeader";
import GalleryFooter from "./GalleryFooter";
import GalleryImage from "./GalleryImage";

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.galleryInfo = {
      title: `Friends Photo`,
      description: `This gallery shows the photo of my friends`,
      images: [
        {
          name: `Sara`,
          photo: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/93.jpg`
        },
        {
          name: `John`,
          photo: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/46.jpg`
        },
        {
          name: `Joe`,
          photo: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/59.jpg`
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <GalleryHeader title={this.galleryInfo.title} />
        {this.galleryInfo.images.map((image, index) => (
          <GalleryImage key={index} image={image} />
        ))}
        <GalleryFooter
          description={this.galleryInfo.description}
          imageNum={this.galleryInfo.images.length}
        />
      </div>
    );
  }
}

export default Gallery;
