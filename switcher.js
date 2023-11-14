var dark = document.getElementById("dark");
var light = document.getElementById("light");
dark.disabled = true 

function modeSwitch() {

    var checkBox = document.getElementById("modeSwitcher");


    if (checkBox.checked == true){
        light.disabled = true;
        dark.disabled = false;
    } else {
        light.disabled = false;
        dark.disabled = true;
    }

  } 