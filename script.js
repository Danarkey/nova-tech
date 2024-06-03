document.addEventListener('DOMContentLoaded', (event) => {
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("AI");
  const span = document.getElementsByClassName("close")[0];
  const gridContainer = document.querySelector('.grid-container');
  const gameMessage = document.getElementById('gameMessage');
  const gameButtons = document.getElementById('gameButtons');
  const btn1 = document.getElementById('btn1');
  const btn2 = document.getElementById('btn2');
  const btn3 = document.getElementById('btn3');
  const videoContainer = document.getElementById('videoContainer'); // Add this line

  const riddles = [
    { question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?", answer: "echo" },
    { question: "I have keys but open no locks. I have space but no room. You can enter, but you can’t go outside. What am I?", answer: "keyboard" },
    { question: "I can be cracked, made, told, and played. What am I?", answer: "joke" },
    { question: "I am not alive, but I grow; I don’t have lungs, but I need air; I don’t have a mouth, and I can drown. What am I?", answer: "fire" }
  ];

  let currentRiddleIndex = 0;

  // Open the modal when the AI image is clicked
  btn.onclick = function() {
    modal.style.display = "block";
    createGrid();
  }

  // Close the modal when the close button is clicked
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Close the modal when clicking outside the modal content
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Create the grid items
  function createGrid() {
    gridContainer.innerHTML = ''; // Clear existing grid items
    gameMessage.textContent = ''; // Clear the game message
    gameButtons.style.display = 'none'; // Hide buttons
    currentRiddleIndex = 0; // Reset riddle index
    for (let i = 0; i < 4; i++) {
      const div = document.createElement('div');
      div.classList.add('grid-item');
      div.textContent = '?';
      div.onclick = () => {
        if (!div.classList.contains('correct')) {
          askRiddle(div, i);
        }
      };
      gridContainer.appendChild(div);
    }
  }

  // Ask a riddle when a grid item is clicked
  function askRiddle(gridItem, index) {
    const riddle = riddles[currentRiddleIndex];
    const userAnswer = prompt(riddle.question);
    if (userAnswer && userAnswer.toLowerCase() === riddle.answer.toLowerCase()) {
      gridItem.classList.add('correct');
      gridItem.classList.remove('incorrect');
      gridItem.textContent = riddle.answer;
      currentRiddleIndex++;
      if (currentRiddleIndex >= riddles.length) {
        showVideoAndButtons();
      }
    } else {
      gridItem.classList.add('incorrect');
      gridItem.classList.remove('correct');
    }
  }

  // Function to hide the grid and display the video and game buttons
  function showVideoAndButtons() {
    // Hide the grid
    gridContainer.style.display = 'none';

    // Show the video
    videoContainer.innerHTML = `
      <video width="100%" controls>
        <source src="media/AI-small.mp4" type="video/mp4">
        Your browser does not support HTML video.
      </video>
    `;

    // Show buttons when all riddles are solved
    gameMessage.textContent = '';
    gameButtons.style.display = 'block';
  }

  // Add event listeners for the buttons
  btn1.addEventListener('click', () => {
    window.location.href = 'Escape.html'; // Redirect to the Escape page
  });

  btn2.addEventListener('click', () => {
    window.location.href = 'Confront.html'; // Redirect to the Confront page
  });

  btn3.addEventListener('click', () => {
    window.location.href = 'Confront.html'; // Redirect to the Confront page
  });

});

// login modal
document.addEventListener('DOMContentLoaded', function () {
  const loginModal = document.getElementById('loginModal');
  const loginForm = document.getElementById('login-form');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  // Function to open the modal
  function openModal() {
      loginModal.style.display = 'block';
  }

  // Function to close the modal
  function closeModal() {
      loginModal.style.display = 'none';
  }

  // Function to shake the input fields
  function shakeInputs() {
      usernameInput.classList.add('shake');
      passwordInput.classList.add('shake');

      // Remove the 'shake' class after 0.5 seconds
      setTimeout(function () {
          usernameInput.classList.remove('shake');
          passwordInput.classList.remove('shake');
      }, 500);
  }

  // Event listener for the form submission
  loginForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission behavior

      // Perform login authentication here (for demonstration purposes, let's assume it's successful)
      const username = usernameInput.value;
      const password = passwordInput.value;

      // Check the username and password (dummy check for demonstration)
      if (username === 'user' && password === 'password') {
          // If login is successful, close the modal
          closeModal();
      } else {
          // If login fails, shake the input fields
          shakeInputs();
      }
  });

  // Open the modal when the page is loaded
  openModal();
});

// Get current date
var now = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var currentDate = now.toLocaleDateString('en-US', options);

// Insert current date into HTML
document.getElementById("currentDate").textContent = currentDate;