// Handle Button Clicks



// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
function changeBackgroundColor () {
  document.body.style.backgroundColor = 'rgb(173, 216, 230)';
}
};

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Implement the function to reset background color
function resetBackgroundColor () {
  document.body.style.backgroundColor = '';
}
};

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
function displayUserInput() {
  const input = document.getElementById('textInput').value;
  const display = document.getElementById('textInputDisplay');
  display.textContent = `You typed: ${input}`;
}
};

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  // Implement the function to display user input
function displayKeyPress(event) {
  const display = document.getElementById('keyPressDisplay');
  display.textContent = `Key pressed: ${event.key}`;
}
};

// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)


  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)
};

function setupEventListeners () {
  document.getElementById("changeColorButton").addEventListener('click', changeBackgroundColor);

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayUserInput)
document.getElementById('resetColorButton').addEventListener('dblclick', resetBackgroundColor);
document.addEventListener('keydown',displayKeyPress);

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
document.getElementById('textInput').addEventListener('input', displayUserInput);
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
if(typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}
};