"use strict";

let body = document.getElementById("dark-mode");
let button = document.getElementById("toggle-button");
let text = document.getElementById("text");

button.addEventListener("click", () =>{
    body.classList.toggle("dark-mode");
    text.innerHTML = "Dark mode toggled!";
});



// button.addEventListener("click", () =>{
//     text.innerHTML = "Theme activated!";
// });
