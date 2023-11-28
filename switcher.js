var dark = document.getElementById("dark");
var light = document.getElementById("light");
dark.disabled = true 


function modeSwitch() {

    var logo = document.getElementById("logo");
    var checkBox = document.getElementById("modeSwitcher");

    if (checkBox.checked == true){
        light.disabled = true;
        dark.disabled = false;
        logo.src = "images/IAmSolutionsLogoWhite.png";
    } else {
        light.disabled = false;
        dark.disabled = true;
        logo.src = "images/IAmSolutionsLogo.png";
    }

  } 