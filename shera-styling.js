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

let revertButton = document.getElementById("revert-button");

revertButton.addEventListener("click", () =>{
    document.body.style.fontSize = "16px";
    text.innerHTML = "Text size reverted!";
});


// button.addEventListener("click", () =>{
//     text.innerHTML = "Theme activated!";
// });
