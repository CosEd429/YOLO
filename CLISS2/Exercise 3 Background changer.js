//Change the background colour of the webpage, based on the key that was pressed by the user:
// User pressed “r” key → change background colour to red.
// User pressed “g” key → change background colour to green.
// User pressed “b” key → change background colour to blue.
let count = 0;
var color = "x"

document.addEventListener('keypress', function(event) {
if (event.key == "r"){
    document.body.style.backgroundColor = "red";
    if (color != "red") {
        color = "red"
        count++;
    
    }
}
else if (event.key == "g"){
    document.body.style.backgroundColor = "green";
    if (color != "green") {
        color = "green"
        count++;
    }
}
else if (event.key == "b"){
    document.body.style.backgroundColor = "blue";
    if (color != "blue") {
        color = "blue"
        count++;
    }
}

document.getElementById("changeCounter").innerHTML = "Color Change Count:" + count;
});

// button Random colour

document.getElementById("randomColor").addEventListener("click", function(){
    document.body.style.backgroundColor = "rgb" +"(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")";
    count++;
    document.getElementById("changeCounter").innerHTML = "Color Change Count:" + count;
});





