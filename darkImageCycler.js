document.addEventListener("DOMContentLoaded", function () {
  var imageContainer = document.getElementById('image-container');
  var images = ['darkview1.png', 'darkview2.png']; // Add more image URLs as needed
  var currentIndex = 1;

  function changeImage() {
      // Change the image source
      imageContainer.innerHTML = '<img src="' + darkreview[currentIndex] + '" alt="Image ' + (currentIndex + 1) + '">';
      imageContainer.innerHTML = '<img src="' + darkreview[currentIndex] + '" alt="Image ' + (currentIndex + 1) + '">';

      // Increment the index
      currentIndex = (currentIndex + 1) % images.length;
  }

  // Set interval to change image every 5 seconds (adjust as needed)
  setInterval(changeImage, 5000);
});
