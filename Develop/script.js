var headerEl = document.querySelector("#currentDay");
var inputEl9 = document.querySelector("#input9")
var buttonEl9 = document.querySelector("#button9")


var currentTime = document.createElement("p");
currentTime.textContent = moment().format("MMMM Do YYYY");

headerEl.appendChild(currentTime);


