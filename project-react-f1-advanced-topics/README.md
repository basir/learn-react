# Project F1 Advanced Topics

Topics: Inline Styles
,Make a Style Object Variable
,Style Name Syntax
,Style Value Syntax
,Share Styles Across Multiple Components
,PropTypes
,Apply PropTypes
,Add Properties to PropTypes
,PropTypes in Stateless Functional Components
,Separating presentational components from display components
,Stateless Functional Components
,Adding Props

## Project Title: Product Filter

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

7. Create `SearchFilter` component and put it into render method of `App` component.

8. In the `SearchResult` component and put it into render method of `App` component.

9. In the `SearchSummary` component and put it into render method of `App` component.

10. Create arrays `items` in `App.js` that has 3 items includes `id`, `name`, `price`, `inStock`.

11.  In `SearchFilter` create 4 input boxes include `query`, `minPrice`, `MaxPrice` and `inStock`

12. In `SearchResult` show products based on the values that user enters in `SearchFilter`.

13. In `SearchSummary` show number of founded products based on the values that user enters in `SearchFilter`. 

14. Make `SearchResult` and `SearchSummary` as functional components.
