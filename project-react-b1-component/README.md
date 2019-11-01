# Project React B1 Component

Topics: Hello world Component
, Try on your computer
, Import React
, Import ReactDOM
, Create Component Class
, Name Component Class
, Component Class Instructions
, The Render Function
, Creating Component Instance
, Rendering Component
, Use Multiline JSX in a Component
, Use Variable Attribute In Component
, Put Logic In Render Function
, Use Conditionals in Render Function
, Use this In Component
, Event Listener In Component
, Components Interact
, A Component in a Render Function
, Apply a Component in a Render Function
, Require A File
, export
, Component Rendering In Action

## Project Title: Postal Card

1. It was supposed that you are in VS Code, added this repository folder to workspace and opened terminal in `learn-react` folder.

2. Change directory to this project folder and create react app:

```bash
 $ cd project-react-b1-component
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

1. Create `PostalCard.js` in `src` folder Create `PostalCard` component there.

2. Add 2 divs side by side in the render method of `PostalCard` and surrond them into a outer div.

3. In left div create 2 paragraph and enter address info in first one and custom message in second one. Set its width to 200px.

4. In right div create another div. If it is 7am to 5pm set background color `Cyan` else set to `DarkBlue`.

5. Inside above div, put an image. set src to one of these address randomly:

- https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/93.jpg
- https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/46.jpg
- https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/59.jpg

Not: Create an array with these address and use Math.random to make index between 0 to 2.

1. Edit `App.js` to import `PostalCard.js` and use it as `<PostalCard />` in the render method of App component.

2. Run `npm start` to check result in Chrome.
