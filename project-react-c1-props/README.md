# Project React C1 Props

Topics:
this.props
,Access a Component's props
,Pass `props` to a Component
,Render a Component's props
,Pass props From Component To Component
,Render Different UI Based on props
,Put an Event Handler in a Component Class
,Pass an Event Handler as a prop
,Receive an Event Handler as a prop
,handleEvent, onEvent, and this.props.onEvent
,this.props.children
,defaultProps

## Project Title: Image Gallery

1. It is supposed that you are in VS Code, added this repository folder to workspace and opened terminal in `learn-react` folder.

2. Change directory to this project folder and create react app:

```bash
 $ cd project-react-c1-props
 $ npx create-react-app your-name-app
```

Note: Replace `your-name` with your first name to make it unique.

3. Delete all files in `public` folder but keep `index.html`. Edit `index.html` to remove reference to deleted files.

Your index.html would be like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

4. Delete all files in `src` folder but keep `index.js`, `App.js`. Edit these two files remove references to deleted files.

Your index.js would be like this:

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

Your App.js would be like this:

```javascript
import React from "react";
export default class App extends React.Component {
  render() {
    return <div>React App</div>;
  }
}
```

5. Create component `Gallery` in a file named `Gallery.js`.

6. Create component `GalleryHeader` in a file named `GalleryHeader.js`.

7. Create component `GalleryImage` in a file named `Gallery.js`.

8. Create component `GalleryFooter` in a file named `GalleryFooter.js`.

9. Create an object in `Gallery` component inside constructor like this:

```javascript
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
```

10. Compose `Gallery` with a `GalleryHeader`, Multiple `GalleryImage`s and `GalleryFooter`.

11. `GalleryHeader` show title of the gallery in h1 element. Send `this.galleryInfo.title` as props to this component.

12. Use map to convert `this.galleryInfo.images` to `GalleryImage`. Send each item of the array as`image` props to `GalleryImage` component.

13. `GalleryFooter` show description of the gallery in p element. Send `this.galleryInfo.description` as props to this component.

14. Show number of image as new p element next to above paragraph in `GalleryFooter`. It should be like `This gallery has x images.`

15. Add `Gallery` to `App` component.

16. Run `npm start` and Check result in the browser.
