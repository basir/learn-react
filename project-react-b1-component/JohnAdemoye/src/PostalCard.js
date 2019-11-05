import React from 'react';

const today = new Date();
const hour = today.getHours();

const imgArray = [
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/93.jpg',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/46.jpg',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/59.jpg'
];
const random = Math.floor(Math.random() * 3);
const randomUrl = imgArray[random];

function PostalCard() {
  return (
    <div>
      <div style={{ width: '200px', display: 'inline-block' }}>
        <p>Lagos, Nigeria</p>
        <p>Hello World</p>
      </div>
      <div
        style={{
          display: 'inline-block',
          backgroundColor: hour > 7 && hour < 17 ? 'Cyan' : 'DarkBlue'
        }}
      >
        <img src={randomUrl} alt={'img'} />
        <div></div>
      </div>
    </div>
  );
}

export default PostalCard;
