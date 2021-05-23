var headerEl = document.querySelector("#currentDay");
var inputEl9 = document.querySelector("#input9")
var buttonEl9 = document.querySelector("#button9")
var displayEl9 = document.querySelector("#display9")
var inputEl10 = document.querySelector("#input10")
var buttonEl10 = document.querySelector("#button10")
var displayEl10 = document.querySelector("#display10")
var inputEl11 = document.querySelector("#input11")
var buttonEl11 = document.querySelector("#button11")
var displayEl11 = document.querySelector("#display11")
var inputEl12 = document.querySelector("#input12")
var buttonEl12 = document.querySelector("#button12")
var displayEl12 = document.querySelector("#display12")
var inputEl1 = document.querySelector("#input1")
var buttonEl1 = document.querySelector("#button1")
var displayEl1 = document.querySelector("#display1")
var inputEl2 = document.querySelector("#input2")
var buttonEl2 = document.querySelector("#button2")
var displayEl2 = document.querySelector("#display2")
var inputEl3 = document.querySelector("#input3")
var buttonEl3 = document.querySelector("#button3")
var displayEl3 = document.querySelector("#display3")
var inputEl4 = document.querySelector("#input4")
var buttonEl4 = document.querySelector("#button4")
var displayEl4 = document.querySelector("#display4")
var inputEl5 = document.querySelector("#input5")
var buttonEl5 = document.querySelector("#button5")
var displayEl5 = document.querySelector("#display5")
displayEl9.className = "display9"
displayEl10.className = "display10"
displayEl11.className = "display11"
displayEl12.className = "display12"
displayEl1.className = "display1"
displayEl2.className = "display2"
displayEl3.className = "display3"
displayEl4.className = "display4"
displayEl5.className = "display5"
var deleteButtonEl = document.querySelector("#delete-button")

// Display Current Date at the top of the page
var currentTime = document.createElement("p");
currentTime.textContent = moment().format("MMMM Do YYYY");

headerEl.appendChild(currentTime);


// Save content to scheduler
var timeOfChange = moment().format('MMMM Do YYYY, h:mm:ss')

buttonEl9.addEventListener("click", function() {
    localStorage.setItem(timeOfChange, inputEl9.value);


if (localStorage.length !== 0 ) {
displayEl9.innerHTML += localStorage.getItem(localStorage.key(timeOfChange));
};

})

if (localStorage.length !== 0 ) {
    displayEl9.innerHTML += localStorage.getItem(localStorage.key(timeOfChange));
}

buttonEl10.addEventListener("click", function() {
    localStorage.setItem(timeOfChange, inputEl10.value);


if (localStorage.length !== 0 ) {
displayEl10.innerHTML += localStorage.getItem(localStorage.key(timeOfChange));
};
})

if (localStorage.length !== 0 ) {
    displayEl10.innerHTML += localStorage.getItem(localStorage.key(timeOfChange));
    };


buttonEl11.addEventListener("click", function() {
    localStorage.setItem(timeOfChange, inputEl11.value);


if (localStorage.length !== 0 ) {
displayEl11.innerHTML += localStorage.getItem(localStorage.key(timeOfChange));
};
})

if (localStorage.length !== 0 ) {
    displayEl11.innerHTML += localStorage.getItem(localStorage.key(timeOfChange));
    };

buttonEl12.addEventListener("click", function() {
    localStorage.setItem(timeOfChange, inputEl12.value);


if (localStorage.length !== 0 ) {
displayEl12.innerHTML += localStorage.getItem(localStorage.key(timeOfChange));
};
})

if (localStorage.length !== 0 ) {
    displayEl12.innerHTML += localStorage.getItem(localStorage.key(timeOfChange));
    };


buttonEl1.addEventListener("click", function() {
    localStorage.setItem(timeOfChange, inputEl1.value);


if (localStorage.length !== 0 ) {
displayEl1.innerHTML += localStorage.getItem(localStorage.key(timeOfChange));
};
})

if (localStorage.length !== 0 ) {
    displayEl1.innerHTML += localStorage.getItem(localStorage.key(timeOfChange));
    };

buttonEl2.addEventListener("click", function() {
    localStorage.setItem(timeOfChange, inputEl2.value);


if (localStorage.length !== 0 ) {
displayEl2.innerHTML += localStorage.getItem(localStorage.key(timeOfChange));
};
})

if (localStorage.length !== 0 ) {
    displayEl2.innerHTML += localStorage.getItem(localStorage.key(timeOfChange));
    };

buttonEl3.addEventListener("click", function() {
    localStorage.setItem(timeOfChange, inputEl3.value);


if (localStorage.length !== 0 ) {
displayEl3.innerHTML += localStorage.getItem(localStorage.key(timeOfChange));
};
})

if (localStorage.length !== 0 ) {
    displayEl3.innerHTML += localStorage.getItem(localStorage.key(timeOfChange));
    };

buttonEl4.addEventListener("click", function() {
    localStorage.setItem(timeOfChange, inputEl4.value);


if (localStorage.length !== 0 ) {
displayEl4.innerHTML += localStorage.getItem(localStorage.key(timeOfChange));
};
})

if (localStorage.length !== 0 ) {
    displayEl4.innerHTML += localStorage.getItem(localStorage.key(timeOfChange));
    };

buttonEl5.addEventListener("click", function() {
    localStorage.setItem(timeOfChange, inputEl5.value);


if (localStorage.length !== 0 ) {
displayEl5.innerHTML += localStorage.getItem(localStorage.key(timeOfChange));
};
})

if (localStorage.length !== 0 ) {
    displayEl5.innerHTML += localStorage.getItem(localStorage.key(timeOfChange));
    };



// Clear scheduler
deleteButtonEl.addEventListener("click", function() {
    localStorage.clear();
    location.reload()
})