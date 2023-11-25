document.addEventListener("DOMContentLoaded", function () {
  var imageContainer = document.getElementById('image-container');
  var darkImages = ['images/darkreview1.jpg', 'images/darkreview2.jpg'];
  var lightImages = ['images/lightreview1.jpg', 'images/lightreview2.jpg'];
  var currentIndex = 0;
  var currentMode = "light"; // default mode

  function toggleImage() {
      var selectedImages = currentMode === "dark" ? darkImages : lightImages;
      imageContainer.innerHTML = '<img src="' + selectedImages[currentIndex] + '" alt="review ' + (currentIndex + 1) + '">';

      currentIndex = (currentIndex + 1) % selectedImages.length; // cycle through images
  }

  document.addEventListener('modeChange', function (mode) {
      currentMode = mode.detail;
      currentIndex = 0; 
      toggleImage();
  });

  // Set interval to change image in ms
  setInterval(toggleImage, 5000);
});
