// content.js

// This script simply adds a border to all images on the webpage when the extension is active
function addBorderToImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.style.border = '2px solid red';
    });
  }
  
  // Execute the function when the extension is activated
  addBorderToImages();
  