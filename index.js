// Change background color to a light blue
function changeBackgroundColor() {
  document.body.style.backgroundColor = 'rgb(173, 216, 230)';
}

// Reset background color
function resetBackgroundColor() {
  document.body.style.backgroundColor = '';
}

// Display key pressed
function displayKeyPress(event) {
  const display = document.getElementById('keyPressDisplay');
  display.textContent = `Key pressed: ${event.key}`;
}

// Display user input in real-time
function displayUserInput() {
  const input = document.getElementById('textInput').value;
  const display = document.getElementById('textInputDisplay');
  display.textContent = `You typed: ${input}`;
}

// Attach event listeners
function setupEventListeners() {
  document.getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor);

  document.getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor);

  document.addEventListener('keydown', displayKeyPress);

  document.getElementById('textInput')
    .addEventListener('input', displayUserInput);
}

// Initialize after DOM loads
document.addEventListener('DOMContentLoaded', setupEventListeners);

// Export functions for testing (if using Jest)
if (typeof module !== 'undefined') {
  module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners
  };
}
