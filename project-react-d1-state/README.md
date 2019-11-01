# Project React D1 State

Topics: State
,Setting Initial State
,Access a Component's state
,Update state with this.setState
,Call this.setState from Another Function
,this.setState Automatically Calls render
,Build a Stateful and Stateless Component Class
,Don't Update props
,Child Components Update Their Parents' state
,Define an Event Handler
,Pass the Event Handler
,Receive the Event Handler
,Child Components Update Sibling Components
,One Sibling to Display, Another to Change
,Pass the Right props to the Right Siblings
,Display Information in a Sibling Component
,Handling Forms
,Input onChange
,Set the Input's Initial State
,Update an Input's Value
Controlled vs Uncontrolled

## Project Title: ...

1. It was supposed that you are in VS Code, added this repository folder to workspace and opened termial in `learn-react` folder.

2. Change directory to this project folder and create react app:

```bash
 $ cd project-react-d1-state
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
