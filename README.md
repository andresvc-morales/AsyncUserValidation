# Async User Validation

A simple web application that validates user information asynchronously using JavaScript. It simulates age validations with Promises and setTimeout to demonstrate asynchronous programming concepts.

## Features

- **Form Validation**: Checks that name and age fields are not empty (ignores whitespace).
- **Asynchronous Processing**: Simulates age validation with a 2-second delay using `setTimeout`.
- **Age Determination**: Displays whether the user is an adult (≥18) or minor (<18) based on age.
- **Modern UI**: Responsive design with CSS, centered layout, styled inputs, and hover effects.
- **Error Handling**: Shows error messages for invalid information or negative ages.

## Technologies Used

- **HTML5**: Basic form structure with inputs and button.
- **CSS3**: Styling with Flexbox for layout, soft colors, and transitions.
- **JavaScript (ES6+)**: Asynchronous logic with Promises, async/await, event listeners, and DOM manipulation.

## Project Structure

```
Async User Validation
├─ css/
│  └─ style.css          # User interface styles
├─ main.html             # Main page with HTML form
├─ README.md             # Project documentation
└─ Scripts/
   └─ script.js          # JavaScript code for validations and events
```

## How to Run

1. Open the `main.html` file in a web browser (e.g., Chrome or Firefox).
2. Enter a name and age in the respective fields.
3. Click the "Submit" button.
4. Observe the status message that appears after processing (2-second simulation).

## Detailed Functionality

- **Form Submission**: Prevents page reload with `preventDefault()`.
- **Initial Validation**: If name or age is empty (after trim), displays "Invalid information".
- **Processing**: Clears fields and runs asynchronous validation.
- **Async Simulation**: `validateAge` uses a Promise with `setTimeout` for delay.
- **Result**: Determines adult/minor status or shows error if age < 0.
- **Visual States**: Status paragraph shows/hides dynamically.

This project is an educational example for learning asynchronous JavaScript, Promises, and DOM manipulation.