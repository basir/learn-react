import React from 'react';

function GalleryFooter(props) {
  return (
    <div>
      <p>This gallery has {props.imageNum} images</p>
      <p>{props.description}</p>
    </div>
  );
}

export default GalleryFooter;
