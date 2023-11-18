document.addEventListener("DOMContentLoaded", function () {
  var imageContainer = document.getElementById('image-container');
  var images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Add more image URLs as needed
  var currentIndex = 0;

  function changeImage() {
      // Change the image source
      imageContainer.innerHTML = '<img src="' + images[currentIndex] + '" alt="Image ' + (currentIndex + 1) + '">';

      // Increment the index
      currentIndex = (currentIndex + 1) % images.length;
  }

  // Set interval to change image every 5 seconds (adjust as needed)
  setInterval(changeImage, 5000);
});
