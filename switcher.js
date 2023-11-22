var dark = document.getElementById("dark");
var light = document.getElementById("light");
// var lightCycler = document.getElementById("lightImage");
// var darkCycler = document.getElementById("darkImage");
dark.disabled = true 
// darkCycler.disabled = true


function modeSwitch() {

    var logo = document.getElementById("logo");
    var checkBox = document.getElementById("modeSwitcher");
    var imageCycler = document.getElementById("imageCycler")
    // var lightCycler = document.getElementById("lightImage");
   // var darkCycler = document.getElementById("darkImage");

    if (checkBox.checked == true){
        light.disabled = true;
        dark.disabled = false;
        logo.src = "images/IAmSolutionsLogoWhite.png";
        imageCycler.src = "imagecyclers/darkImageCycler.js"
        // lightCycler.disabled = true;
       // darkCycler.disabled = false;
    } 
    else{
        light.disabled = false;
        dark.disabled = true;
        logo.src = "images/IAmSolutionsLogo.png";
        imageCycler.src = "imagecyclers/lightImageCycler.js"
        // lightCycler.disabled = false;
       // darkCycler.disabled = true;
    }

  } 