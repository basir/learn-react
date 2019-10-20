# Project React B1 Introduction

To code this project you need to know:
class vs className
, Self-closing Tags
, JavaScript In Your JSX In Your JavaScript
, Curly Braces in JSX
, 20 Digits of Pi in JSX
, Variables in JSX
, Variable Attributes in JSX
, Event Listeners in JSX
, JSX Conditionals: If Statements That Don't Work
, JSX Conditionals: If Statements That Do Work
, JSX Conditionals: The Ternary Operator
, JSX Conditionals: &&
, .map in JSX
, Keys

If you are not familier with them download Learn React eBook from (https://codingwithbasir.com/learn-react)

## Project Title: Telephone Bill

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

3. In `script` tag, define a variable named `telephoneBill` and create a jsx element as follow:

4. Create a div and put a h1 tag inside it and set it to `My Telephone Bill`

5. Create a div next to h1 and set its css class to `header`

6. Define a variable named `accountName` out side of jsx and set it to your name.

7. Inside header div create 2 paragraph. I left first paragraph put a fake address and in second one put Bill Date and account Name. account Name should be in new line.
   Note: For Bill Date use `new Date().toISOString().slice(0, 10)` method with Curly Braces in JSX. For account Name use the variable `accountName`.

8. Create another div next to header div and set its className to `content`

9. Define a variable `typesOfCharges` before `telephoneBill` as follow:

```javascript
const typesOfCharges = [
  { name: "Monthly Service", fee: 24 },
  { name: "Tax", fee: 2.4 },
  { name: `CBT Service`, fee: 1.2 }
];
```

10. Create a table inside `content` div and show above array as 2 column table. Use `.map` to convert array to jsx elements. Set `key` attribute to fee `name` field.

11. Add a div and set className to `footer`. Calculate total fee from `typesOfCharges` and check if it is greater the 0. If it is show it as `Total: $X` else show `Your bill is free this month`.
    Note: Round the number to 2 decimal points. Use `Math.round`

12. Add an image to the end of this bill. Define variable `stampUrl` before `telephoneBill` and set it to `https://image.freepik.com/free-vector/paid-stamp_1017-8234.jpg`. Set image url to `stampUrl` and set width and height to 80px.

13. Add an event listener on the image to show a alert message with user click on it and say "Yes. It is paid."

14. Render `telephoneBill` by adding this code `ReactDOM.render(telephoneBill, document.getElementById("root"));` as last command.

15. Add style to the component in the head tag like this:

```html
<style>
  #root {
    max-width: 500px;
    margin: 0 auto;
  }
  .header {
    border: 1px solid gray;
    padding: 10px;
  }
  .content {
    border: 1px solid gray;
    padding: 10px;
  }
  .footer {
    border: 1px solid gray;
    padding: 10px;
  }
  table {
    width: 100%;
  }
</style>
```

15. Check result in chrome.

## How to deliver this project

Check this link: https://codingwithbasir.com/how-to-deliver-projects/
