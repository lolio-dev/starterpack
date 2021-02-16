const underscore = document.getElementById("underscore")

function blink() {
    if (underscore.style.visibility=='visible'){ 
        underscore.style.visibility='hidden'; 
     } 
     else{ 
        underscore.style.visibility='visible'; 
     } 
}

let periode = setInterval(blink, 500); 