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

## Project Title: Weblog

1. It was supposed that you are in VS Code, added this repository folder to workspace and opened terminal in `learn-react` folder.

2. Change directory to this project folder and create react app:

```bash
 $ cd project-react-e1-lifecycle-methods
 $ npx create-react-app your-name-app
```

Note: Replace `your-name` with your first name to make it unique.

3. Delete `README.md` file.

4. Add this line to the end of `.gitignore` to prevent pushing package-lock.json to github.

```
package-lock.json
```

5. Delete all files in `public` folder but keep `index.html`. Edit `index.html` to remove reference to deleted files.

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

6. Delete all files in `src` folder but keep `index.js`, `App.js`. Edit these two files remove references to deleted files.

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

7. Fetch list of posts from `https://jsonplaceholder.typicode.com/posts` and put it in `this.state.posts` of App Component state in `ComponentDidMount` event.

8. Create a component named `Post` that show as post including title, body and user id. In the App component use this component to render  `this.state.posts` as vertical list.

9. Create another component named `Summary` that shows number of posts in  `this.state.posts`. Use this component is `App.js` and pass `this.state.posts.length` as `num` prop to it.

10. In the `Summary` component define `componentDidUpdate` to check `prevProps.num` and `this.props.num`. If  `prevProps.num` <= `this.props.num` then set green background effect for 1 second else set red background effect for 1 second.

11. Add a button to `Summary` named `Refresh` and fetch again from  `https://jsonplaceholder.typicode.com/posts` when user click on it.

