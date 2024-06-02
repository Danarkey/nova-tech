window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('loader').classList.add('hidden');
    const inputContainer = document.getElementById('input-container');
    inputContainer.classList.remove('hidden');
    inputContainer.classList.add('show');
  }, 4000);
});

// Get current date and time
var now = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var datetime = now.toLocaleDateString('en-US', options);

// Insert date and time into HTML
document.getElementById("datetime").innerHTML = datetime;
