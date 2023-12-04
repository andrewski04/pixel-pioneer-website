// Function to get URL parameter by name
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Function to update the navigation links with the current mode
function updateNavLinksWithMode(currentMode) {
    var navLinks = document.querySelectorAll('a');
    navLinks.forEach(function(link) {
        var originalHref = link.getAttribute('href').split('?')[0]; // Remove existing query parameters
        link.setAttribute('href', originalHref + '?mode=' + currentMode);
    });
}

// Function to update the mode based on the toggle state
function updateMode(isDarkMode) {
    var darkStyle = document.getElementById("dark");
    var lightStyle = document.getElementById("light");
    var logo = document.getElementById("logo");
    var currentMode = isDarkMode ? 'dark' : 'light';

    lightStyle.disabled = isDarkMode;
    darkStyle.disabled = !isDarkMode;
    logo.src = isDarkMode ? "images/IAmSolutionsLogoWhite.png" : "images/IAmSolutionsLogo.png";

    // Update navigation links
    updateNavLinksWithMode(currentMode);

    // Update URL without reloading
    var newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?mode=' + currentMode;
    window.history.pushState({path: newUrl}, '', newUrl);

    // Dispatch the modeChange event for the imageCycler.js to listen to
    document.dispatchEvent(new CustomEvent('modeChange', { detail: currentMode }));
}


// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    var checkBox = document.getElementById("modeSwitcher");
    var modeFromUrl = getParameterByName('mode') || 'light';

    checkBox.checked = modeFromUrl === 'dark';
    updateMode(modeFromUrl === 'dark');

    // Event listener for changes in the mode switcher
    checkBox.addEventListener("change", function() {
        updateMode(checkBox.checked);
    });
});
