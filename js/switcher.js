document.addEventListener("DOMContentLoaded", function () {
    var darkButton = document.getElementById("dark");
    var lightButton = document.getElementById("light");
    var logo = document.getElementById("logo");
    var checkBox = document.getElementById("modeSwitcher");

    darkButton.disabled = true; 

    checkBox.addEventListener("change", function() {
        if (checkBox.checked) {
            lightButton.disabled = true;
            darkButton.disabled = false;
            logo.src = "images/IAmSolutionsLogoWhite.png";

            document.dispatchEvent(new CustomEvent('modeChange', { detail: 'dark' }));
        } else {
            lightButton.disabled = false;
            darkButton.disabled = true;
            logo.src = "images/IAmSolutionsLogo.png";

            document.dispatchEvent(new CustomEvent('modeChange', { detail: 'light' }));
        }
    });
});