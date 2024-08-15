  // Function to close the modal and show content
  function closeModal() {
    document.getElementById('welcomeModal').style.display = 'none';
}

// Modal form submission
document.getElementById('modal-submit').addEventListener('click', function() {
    const name = document.getElementById('name-input-modal').value.trim();
    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    // Store the name in localStorage for use in the greeting card section
    localStorage.setItem('userName', name);

    // Show a personalized welcome alert
    alert(`Welcome, ${name}!`);

    closeModal();
});

// Function to start music
function startMusic() {
    var musicPlayer = document.getElementById('musicPlayer');
    var startMusicButton = document.querySelector('.start-music');
    musicPlayer.style.display = 'block';
    startMusicButton.style.display = 'none';
    var audio = musicPlayer.querySelector('audio');
    audio.play();
}

// Function to display the personalized greeting card
document.getElementById('generate-card-button').addEventListener('click', function() {
    const name = localStorage.getItem('userName') || document.getElementById('name-input').value.trim();
    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    // Create a canvas to generate the card
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 600; // Adjust size as needed
    canvas.height = 400; // Adjust size as needed

    // Background color or image
    ctx.fillStyle = '#FFD700'; // Background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add text
    ctx.font = '30px Poppins, sans-serif';
    ctx.fillStyle = '#138808';
    ctx.textAlign = 'center';
    ctx.fillText('Happy 78th Independence Day,', canvas.width / 2, canvas.height / 2 - 20);
    ctx.fillText(name, canvas.width / 2, canvas.height / 2 + 20);

    // Convert canvas to image
    const image = new Image();
    image.src = canvas.toDataURL('image/png');

    // Display the generated card
    document.getElementById('greeting-card-preview').src = image.src;
    document.getElementById('greeting-card-container').style.display = 'block';
    document.getElementById('download-link').href = image.src;
});

// Display modal on page load
window.onload = function() {
    document.getElementById('welcomeModal').style.display = 'flex';
};