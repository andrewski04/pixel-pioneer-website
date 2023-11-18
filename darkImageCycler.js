document.addEventListener("DOMContentLoaded", function () {
  var imageContainer = document.getElementById('image-container');
  var images = ['darkreview1.png', 'darkreview2.png']; // Add more image URLs as needed
  var currentIndex = 0;

  function changeImage() {
      // Change the image source
      imageContainer.innerHTML = '<img src="' + darkreview[currentIndex] + '" alt="darkreview ' + (currentIndex + 1) + '">';
      imageContainer.innerHTML = '<img src="' + darkreview[currentIndex] + '" alt="darkreview ' + (currentIndex + 1) + '">';

      // Increment the index
      currentIndex = (currentIndex + 1) % images.length;
  }

  // Set interval to change image every 5 seconds (adjust as needed)
  setInterval(changeImage, 5000);
});
