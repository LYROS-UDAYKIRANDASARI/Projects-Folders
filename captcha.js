const images = document.querySelectorAll('img');
const resetButton = document.getElementById('reset');
const verifyButton = document.getElementById('verify');
const para = document.getElementById('para');
let clickedImages = [];
let state = 1;

// Shuffle images
function shuffleImages() {
  const imageContainer = document.getElementById('image-container');
  for (let i = imageContainer.children.length; i >= 0; i--) {
    imageContainer.appendChild(imageContainer.children[Math.random() * i | 0]);
  }
}

// Reset state
function resetState() {
  clickedImages = [];
  resetButton.style.display = 'none';
  verifyButton.style.display = 'none';
  para.textContent = '';
  para.style.display = 'none';
  document.querySelectorAll('.error').forEach(error => error.remove());
  state = 1;
}

// Check if all clicked images are identical
function checkIdentical() {
  return new Set(clickedImages).size === 1;
}

// Handle image clicks
function handleImageClick(event) {
  if (state === 1) {
    resetButton.style.display = 'block';
    state = 2;
  }
  if (clickedImages.length < 2 && !clickedImages.includes(event.target)) {
    clickedImages.push(event.target);
    if (clickedImages.length === 2) {
      verifyButton.style.display = 'block';
      state = 3;
    }
  } else {
    const errorParagraph = document.createElement('p');
    errorParagraph.textContent = 'You can select a maximum of two images.';
    errorParagraph.classList.add('error');
    document.body.appendChild(errorParagraph);
  }
}

// Handle verify button click
function handleVerifyClick() {
  if (checkIdentical()) {
    para.textContent = 'You are a human. Congratulations!';
  } else {
    para.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
  }
  para.style.display = 'block';
  verifyButton.style.display = 'none';
  state = 4;
}

// Add event listeners
images.forEach(image => image.addEventListener('click', handleImageClick));
resetButton.addEventListener('click', () => {
  resetState();
  document.getElementById('h').textContent = 'Please click on the identical tiles to verify that you are not a robot.';
});
verifyButton.addEventListener('click', handleVerifyClick);

// Initial setup
shuffleImages();