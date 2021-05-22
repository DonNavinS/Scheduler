var headerEl = document.querySelector("#currentDay");
var inputEl9 = document.querySelector("#input9")
var buttonEl9 = document.querySelector("#button9")
var displayEl9 = document.querySelector("#reminder")
displayEl9.className = "display9"


var currentTime = document.createElement("p");
currentTime.textContent = moment().format("MMMM Do YYYY");

headerEl.appendChild(currentTime);


var timeOfChange = moment().format('MMMM Do YYYY, h:mm:ss a')

buttonEl9.addEventListener("click", function() {
    localStorage.setItem(timeOfChange, inputEl9.value);
})


if (localStorage.key("reminder") !== null){
    displayEl9.innerHTML += localStorage.getItem(localStorage.key(timeOfChange));
}



