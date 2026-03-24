"use strict";

let body = document.getElementById("dark-mode");
let button = document.getElementById("toggle-button");
let text = document.getElementById("text");

button.addEventListener("click", () =>{
    body.classList.toggle("dark-mode");
    text.innerHTML = "Dark mode toggled!";
});

let textButton = document.getElementById("text-button");

textButton.addEventListener("click", () =>{
    document.body.style.fontSize = "24px";
    text.innerHTML = "Text size increased!";
});


// button.addEventListener("click", () =>{
//     text.innerHTML = "Theme activated!";
// });
