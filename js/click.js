"use strict"

let oliveClickBox = document.getElementById("OliveClick");

oliveClickBox.classList.add("clickBox");

oliveClickBox.addEventListener("click", function(){
    //action that you want to do when you click on the olive box
    document.querySelector("body").style.backgroundColor = "blueviolet";
    oliveClickBoxthis.style.backgroundColor = "pink";
    
});

oliveClickBox.addEventListener("mouseover", function(){
    oliveClickBox.style.backgroundColor = "rgba(0,128,0, 0.75)";
});

oliveClickBox.addEventListener("mouseout", function(){
    oliveClickBox.style.backgroundColor = backgroundColor= "blue";
});

let showButton = document.getElementById("show");

showButton.addEventListener("click", function(){
    showHideBox.style.visibility = "visible";
});

let hideButton = document.getElementById("hide");

hideButton.addEventListener("click", function(){
    showHideBox.style.visibility = "hidden";
});

let toggle = false;

let toggleButton = document.getElementById("toggle");

toggleButton.addEventListener("click", function(){
    if(toggle == false){
        showHideBox.style.visibility = "visiable";
        toggle = true;
    }
    else{
        showHideBox.style.visibility = "hidden";
        toggle = false;
    }
});