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

let popup = document.getElementById("party-mode-popup");
let yesButton = document.getElementById("party-mode-yes");
let noButton = document.getElementById("party-mode-no");

function partyMode() {
    popup.style.display = "flex"; //this is gonna show the popup
}

yesButton.addEventListener("click", () => {
    popup.style.display = "none"; //this is gonna hide the popup
    document.body.classList.add("party-mode"); //this is gonna add the party mode class to the body
    text.innerHTML = "Party mode activated! 🥳";
});

noButton.addEventListener("click", () => {
    popup.style.display = "none"; //this is gonna hide the popup
    document.body.classList.remove("party-mode"); //this is gonna remove the party mode class from the body
    text.innerHTML = "Party mode cancelled.";
});

let stopPartyButton = document.getElementById("stop-party");

stopPartyButton.addEventListener("click", () => {
    document.body.classList.remove("party-mode"); //this is gonna remove the party mode class from the body
    text.innerHTML = "Party mode stopped.";
});



// button.addEventListener("click", () =>{
//     text.innerHTML = "Theme activated!";
// });
