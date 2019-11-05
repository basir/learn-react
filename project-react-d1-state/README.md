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

## Project Title: Credit Card Form

1. It is supposed that you are in VS Code, added this repository folder to workspace and opened terminal in `learn-react` folder.

2. Change directory to this project folder and create react app:

```bash
 $ cd project-react-d1-state
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

4. Delete `README.md` file.

5. Add this line to the end of `.gitignore` to prevent pushing package-lock.json to github.

```
package-lock.json
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

7. Create component `CreditCardForm` in a file named `CreditCardForm.js`.

8. Create component `CardNumberInput` in a file named `CardNumberInput.js`.

9. Create component `OwnerInput` in a file named `OwnerInput.js`.

10. Create component `CvvInput` in a file named `CvvInput.js`.

11. Create component `ExpirationDateInput` in a file named `ExpirationDateInput.js`.

12. Create a state in `CreditCardForm` component inside constructor like this:

```javascript
this.state = {
  cardNumber: "",
  owner: "",
  cvv: "",
  expirationMonth: "",
  expirationYear: "",
  isCardNumberValid: false,
  isOwnerValid: false,
  isCvvNumberValid: false,
  isExpirationMonthValid: false,
  isExpirationYearValid: false
};
```

13. Put a text input in `CardNumberInput` to get `cardNumber`. Save input value to `cardNumber` state of `CreditCardForm`. Set max length to 16. If card number is not 16 digits make the input border red to show error.

14. Put an text input in `OwnerInput` to get `owner`. Save input value to `owner` state of `CreditCardForm`. If card number is empty make the input border red to show error.

15. Put an number input in `CvvInput` to get `cvv`. Save input value to `cvv` state of `CreditCardForm`. If card number is not 3 or 4 digits make the input border red to show error.

16. Put a dropdown input in get month and a number input to get year in `ExpirationDateInput`. If month is not selected make the border red. if year is not 4 digits and less than 2019 make border green. Save dropdown input value to `expirationMonth` state and number input value to `expirationYear` of `CreditCardForm`.

17. Put a Sumbit button at the end of `CreditCardForm`. If all data are valid make it enabled, else set it disabled. When user click on it alert card info.

18. Add `CreditCardForm` to `App` component.

19. Run `npm start` and Check result in the browser.
