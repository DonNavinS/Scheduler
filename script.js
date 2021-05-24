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
var currentDate = document.createElement("p");
currentDate.textContent = moment().format("MMMM Do YYYY");

headerEl.appendChild(currentDate);



// Clear scheduler
deleteButtonEl.addEventListener("click", function() {
    localStorage.clear();
    location.reload()
})


// Change background based on time of day
var timeNow = moment().format("H")


// From 9:00AM-9:59AM
if (timeNow == 9) {
    inputEl9.className = "present";
    inputEl10.className = "future";
    inputEl11.className = "future";
    inputEl12.className = "future";
    inputEl1.className = "future";
    inputEl2.className = "future";
    inputEl3.className = "future";
    inputEl4.className = "future";
    inputEl5.className = "future";
}

if (timeNow == 10) {
    inputEl9.className = "past";
    inputEl10.className = "present";
    inputEl11.className = "future";
    inputEl12.className = "future";
    inputEl1.className = "future";
    inputEl2.className = "future";
    inputEl3.className = "future";
    inputEl4.className = "future";
    inputEl5.className = "future";
}

if (timeNow == 11) {
    inputEl9.className = "past";
    inputEl10.className = "past";
    inputEl11.className = "present";
    inputEl12.className = "future";
    inputEl1.className = "future";
    inputEl2.className = "future";
    inputEl3.className = "future";
    inputEl4.className = "future";
    inputEl5.className = "future";
}

if (timeNow == 12) {
    inputEl9.className = "past";
    inputEl10.className = "past";
    inputEl11.className = "past";
    inputEl12.className = "present";
    inputEl1.className = "future";
    inputEl2.className = "future";
    inputEl3.className = "future";
    inputEl4.className = "future";
    inputEl5.className = "future";
}

if (timeNow == 13) {
    inputEl9.className = "past";
    inputEl10.className = "past";
    inputEl11.className = "past";
    inputEl12.className = "past";
    inputEl1.className = "present";
    inputEl2.className = "future";
    inputEl3.className = "future";
    inputEl4.className = "future";
    inputEl5.className = "future";
}

if (timeNow == 14) {
    inputEl9.className = "past";
    inputEl10.className = "past";
    inputEl11.className = "past";
    inputEl12.className = "past";
    inputEl1.className = "past";
    inputEl2.className = "present";
    inputEl3.className = "future";
    inputEl4.className = "future";
    inputEl5.className = "future";
}

if (timeNow == 15) {
    inputEl9.className = "past";
    inputEl10.className = "past";
    inputEl11.className = "past";
    inputEl12.className = "past";
    inputEl1.className = "past";
    inputEl2.className = "past";
    inputEl3.className = "present";
    inputEl4.className = "future";
    inputEl5.className = "future";
}

if (timeNow == 16) {
    inputEl9.className = "past";
    inputEl10.className = "past";
    inputEl11.className = "past";
    inputEl12.className = "past";
    inputEl1.className = "past";
    inputEl2.className = "past";
    inputEl3.className = "past";
    inputEl4.className = "present";
    inputEl5.className = "future";
}

if (timeNow == 17) {
    inputEl9.className = "past";
    inputEl10.className = "past";
    inputEl11.className = "past";
    inputEl12.className = "past";
    inputEl1.className = "past";
    inputEl2.className = "past";
    inputEl3.className = "past";
    inputEl4.className = "past";
    inputEl5.className = "present";
}

if (timeNow < 9) {
    inputEl9.className = "future";
    inputEl10.className = "future";
    inputEl11.className = "future";
    inputEl12.className = "future";
    inputEl1.className = "future";
    inputEl2.className = "future";
    inputEl3.className = "future";
    inputEl4.className = "future";
    inputEl5.className = "future";
}

if (timeNow > 17) {
    inputEl9.className = "past";
    inputEl10.className = "past";
    inputEl11.className = "past";
    inputEl12.className = "past";
    inputEl1.className = "past";
    inputEl2.className = "past";
    inputEl3.className = "past";
    inputEl4.className = "past";
    inputEl5.className = "past";
}


// Save content to scheduler
var timeOfChange = moment().format('MMMM Do YYYY, h:mm:ss')


buttonEl9.addEventListener("click", function() {
    localStorage.setItem("block 9", inputEl9.value);

// First if statement displays saved text right when "Save" button is clicked, the second if 
// statement displays the saved text when the page is refreshed


if (localStorage.getItem("block 9") !== null) {
displayEl9.innerHTML += localStorage.getItem("block 9");
};

})

if (localStorage.getItem("block 9") !== null) {
    displayEl9.innerHTML += localStorage.getItem("block 9");
    }

buttonEl10.addEventListener("click", function() {
    localStorage.setItem("block 10", inputEl10.value);


if (localStorage.getItem("block 10") !== null ) {
displayEl10.innerHTML += localStorage.getItem("block 10");
};
})

if (localStorage.getItem("block 10") !== null ) {
    displayEl10.innerHTML += localStorage.getItem("block 10");
    };


buttonEl11.addEventListener("click", function() {
    localStorage.setItem("block 11", inputEl11.value);


if (localStorage.getItem("block 11") !== null) {
displayEl11.innerHTML += localStorage.getItem("block 11");
};
})

if (localStorage.getItem("block 11") !== null) {
    displayEl11.innerHTML += localStorage.getItem("block 11");
    };

buttonEl12.addEventListener("click", function() {
    localStorage.setItem("block 12", inputEl12.value);


if (localStorage.getItem("block 12") !== null) {
displayEl12.innerHTML += localStorage.getItem("block 12");
};
})

if (localStorage.getItem("block 12") !== null) {
    displayEl12.innerHTML += localStorage.getItem("block 12");
    };


buttonEl1.addEventListener("click", function() {
    localStorage.setItem("block 1", inputEl1.value);


if (localStorage.getItem("block 1") !== null) {
displayEl1.innerHTML += localStorage.getItem("block 1");
};
})

if (localStorage.getItem("block 1") !== null) {
    displayEl1.innerHTML += localStorage.getItem("block 1");
    };

buttonEl2.addEventListener("click", function() {
    localStorage.setItem("block 2", inputEl2.value);


if (localStorage.getItem("block 2") !== null) {
displayEl2.innerHTML += localStorage.getItem("block 2");
};
})

if (localStorage.getItem("block 2") !== null) {
    displayEl2.innerHTML += localStorage.getItem("block 2");
    };

buttonEl3.addEventListener("click", function() {
    localStorage.setItem("block 3", inputEl3.value);


if (localStorage.getItem("block 3") !== null) {
displayEl3.innerHTML += localStorage.getItem("block 3");
};
})

if (localStorage.getItem("block 3") !== null) {
    displayEl3.innerHTML += localStorage.getItem("block 3");
    };

buttonEl4.addEventListener("click", function() {
    localStorage.setItem("block 4", inputEl4.value);


if (localStorage.getItem("block 4") !== null) {
displayEl4.innerHTML += localStorage.getItem("block 4");
};
})

if (localStorage.getItem("block 4") !== null) {
    displayEl4.innerHTML += localStorage.getItem("block 4");
    };

buttonEl5.addEventListener("click", function() {
    localStorage.setItem("block 5", inputEl5.value);


if (localStorage.getItem("block 5") !== null) {
displayEl5.innerHTML += localStorage.getItem("block 5");
};
})

if (localStorage.getItem("block 5") !== null) {
    displayEl5.innerHTML += localStorage.getItem("block 5");
    };


