# Project React A1 Introduction

Topics: Why React?
, Hello World
, What is JSX?
, JSX Elements
, JSX Elements And Their Surroundings
, Attributes In JSX
, Nested JSX
, JSX Outer Elements
, Rendering JSX
, Passing a Variable to ReactDOM.render()
, The Virtual DOM

## Project Title: Visit Card

1. Open VS Code and create a new html file with your name like `john.html`. Put this code into this file:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      // your code here
    </script>
  </body>
</html>
```

2. Open Chrome side by side of VS Code and open the html file into it. Also Open Developer Tools in Chrome to see warnings and errors.

3. In `script` section, define a variable named `visitCard` and set it to `<h1> Your-Name Visit Card </h1>`.

4. Render `visitCard` by adding this code `ReactDOM.render(visitCard, document.getElementById("root"));`.

5. Edit `visitCard` declaration and surround `h1` by a `div`.

6. Next to h1 add a paragraph and enter some words about yourself.

7. Next to p tag and a link to your twitter account to open it in new window.

8. Next to a tag Add an image from yourself. If you do not have an image url on the web use `https://i.pravatar.cc/300`

## Want to get reviewed?

Send Pull Request. Check how to deliver your code: https://codingwithbasir.com/how-to-deliver-projects/

## Need help?

Download Free eBook https://codingwithbasir.com/download
