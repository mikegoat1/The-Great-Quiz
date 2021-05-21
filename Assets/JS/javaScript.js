// To make the screens switch we are going to have to push and pop elements and classes

// First page I will need to make a h1, p, and button inside the main element
// The h1 will have the title, append that first with its Unique tag
// the p will go under and centered with its unique tag
// the button under will say start with background yellow and black border, with slight border radius 
// when the start button is pressed with eventlistener it will trigger a function to pop all of the elements off the page and it will trigger the next function with the first set off questions


var main = document.querySelector("#main1");

var headEl = document.createElement("h1");
var pEl = document.createElement("p");
var button1El = document.createElement("button");
var box = document.querySelector(".main");
var timeEl = document.querySelector("#timer-text");
var firstAnswer = ["Variable", "That Thang", "Integer", "Loops"];
var secondsLeft = 26;
var isCorrect = true;

//Set time function
function setTime() {
    var timeInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timeInterval);
            timeEl.textContent = "";
            alert("You lost brah");
            //set up local storage to store loss in HighScore
            //change alert to confirm
        }

    }, 1000);
}

function addTime() {
    if (isCorrect) {
        secondsLeft += 10;
    } else {
        secondsLeft -= 10;
    }
}

function startPage() {
    box.setAttribute("style", "height: 300px;");
    // This is the first Heading on the intro
    headEl.textContent = " Super Duper Coding Quiz Challenge";
    headEl.setAttribute("style", "font-Weight: bold; text-align: center;");
    main.appendChild(headEl);

    // The first paragraph explaining what the game
    pEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers(really :/ ) will penalize your scoreTime by ten seconds.... thats alot I am sorry. I didn't make the rules on this assignment.";
    pEl.setAttribute("style", "text-align: center; margin: 20px;");
    main.appendChild(pEl);

    // This is creating the button 
    button1El.textContent = "Start Game";
    button1El.setAttribute("style", "position: relative; left: 238px; bottom: -19px; border: black solid 3px; border-radius: 20px; font-size: large;")
    main.appendChild(button1El);

    // when start button is press
    button1El.addEventListener("click", function () {
        main.removeChild(pEl);
        main.removeChild(button1El)
        main.removeChild(headEl);

        setTime();
        //nest the next function that fills the page 
        firstQuestion();
    })
}

//The first question
function firstQuestion() {
    headEl.setAttribute("style", "font-size: 25px; text-align: center;")
    headEl.textContent = "Name of something to store everything in."
    main.appendChild(headEl);
    var olEL = document.createElement("ol");
    olEL.setAttribute("class", "ol");
    main.appendChild(olEL);

    buttonMaker(firstAnswer);
    main.addEventListener("click", function (event) {
        event.stopPropagation();
        if (event.target.matches("button")) {
            console.log(event.target.value);
            if (event.target.value === "Variable") {
                secondsLeft += 10;
                console.log("correct");
                secondQuestion();
            }
            if (event.target.value === "That Thang") {
                secondsLeft -= 10;
                console.log("not the mommie1");
                secondQuestion();
            } else if (event.target.value === "Integer") {
                secondsLeft -= 10;
                console.log("not the mommie2");
                secondQuestion();
            } else if (event.target.value === "Loops") {
                secondsLeft -= 10;
                console.log("not the mommie3");
                secondQuestion();
            }

        }
    });
}

function secondQuestion() {
    headEl.textContent = "Which one is related to JS?"
    document.querySelector(".button0").textContent = "Pacers";
    document.querySelector(".button0").setAttribute("value", "Pacers");
    document.querySelector(".button1").textContent = "Lakers";
    document.querySelector(".button1").setAttribute("value", "Lakers");
    document.querySelector(".button2").textContent = "Heats";
    document.querySelector(".button2").setAttribute("value", "Heats");
    document.querySelector(".button3").textContent = "addEventListener";
    document.querySelector(".button3").setAttribute("value", "addEventListener")
    main.addEventListener("click", function (event) {
        event.stopPropagation();
        if (event.target.matches("button")) {
            console.log(event.target.value);
            if (event.target.value === "addEventListener") {
                secondsLeft += 10;
                console.log("correct");
                thirdQuestion()
            }
            if (event.target.value === "Pacers") {
                secondsLeft -= 10;
                console.log("not the mommie1");
                thirdQuestion()
            } else if (event.target.value === "Lakers") {
                secondsLeft -= 10;
                console.log("not the mommie2");
                thirdQuestion()
            } else if (event.target.value === "Heats") {
                secondsLeft -= 10;
                console.log("not the mommie3");
                thirdQuestion()
            }
        }
    })
};

function thirdQuestion(){
    headEl.textContent = "What is the best way to hold detailed info?"
    document.querySelector(".button0").textContent = "For Loops";
    document.querySelector(".button0").setAttribute("value", "For Loops");
    document.querySelector(".button1").textContent = "Arrays";
    document.querySelector(".button1").setAttribute("value", "Arrays");
    document.querySelector(".button2").textContent = "Objects";
    document.querySelector(".button2").setAttribute("value", "Objects");
    document.querySelector(".button3").textContent = "Backpack";
    document.querySelector(".button3").setAttribute("value", "Backpack")
    main.addEventListener("click", function (event) {
        event.stopPropagation();
        if (event.target.matches("button")) {
            console.log(event.target.value);
            if (event.target.value === "Objects") {
                secondsLeft += 10;
                console.log("correct");
            }
            if (event.target.value === "For Loops") {
                secondsLeft -= 10;
                console.log("not the mommie1");
            } else if (event.target.value === "Arrays") {
                secondsLeft -= 10;
                console.log("not the mommie2");
            } else if (event.target.value === "Backpack") {
                secondsLeft -= 10;
                console.log("not the mommie3");
            }
        }
    })
}

//Button maker
function buttonMaker(array) {
    for (i = 0; i < array.length; i++) {
        var li = document.createElement("li");
        document.querySelector("ol").appendChild(li);
        var button = document.createElement("button");
        button.textContent = array[i];
        button.setAttribute("style", "color: white; background-color: black; border: black solid; border-radius: 10px; font-size: 15px; z-index: 1;");
        button.setAttribute("class", "button" + [i]);
        button.setAttribute("value", array[i]);
        li.append(button);
    }
}





startPage();


// you can make a class with the presets and add it to your next page elements. 