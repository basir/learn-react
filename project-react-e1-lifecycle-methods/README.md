# Project React E1 Lifecycle Methods

Topics:
What's a Lifecycle Method?
,Mounting Lifecycle Methods
,componentWillMount
,Render
,componentDidMount
,Updating Lifecycle Methods
,componentWillReceiveProps
,shouldComponentUpdate
,componentWillUpdate
,componentDidUpdate
,componentWillUnmount

## Project Title: ...

1. It was supposed that you are in VS Code, added this repository folder to workspace and opened termial in `learn-react` folder.

2. Change directory to this project folder and create react app:

```bash
 $ cd project-react-e1-lifecycle-methods
 $ npx create-react-app your-name-app
```

Note: Replace `your-name` with your first name to make it unique.

3. Delete all files in `public` folder but keep `index.html`. Edit `index.html` to remove reference to deleted files.

Your index.js would be like this:

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

5. ...
