

var main = document.querySelector("#main1");

var headEl = document.createElement("h1");
var pEl = document.createElement("p");
var button1El = document.createElement("button");
var box = document.querySelector(".main");
var timeEl = document.querySelector("#timer-text");
var theScore = document.querySelector(".highscore");
var firstAnswer = ["Variable", "That Thang", "Integer", "Loops"];
var secondsLeft;
var timer;
var isWin;
var winners = [];
var HighScore = {};

theScore.addEventListener("click", function(){
    alert(JSON.stringify(winners))
})

function grabHS(y) {
    //seconds left
    if (y === secondsLeft) {
        HighScore.score = secondsLeft;
        console.log(secondsLeft);
    }
    return secondsLeft;
}

function init() {
    getWinnerCircle();

}




//Set time function
function setTime() {
    timer = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        if (secondsLeft >= 0) {
            if (isWin && secondsLeft > 0) {
                clearInterval(timer);
                grabHS(secondsLeft);
                console.log(secondsLeft);
                timeEl.textContent = "";
            }
        }
        if (secondsLeft <= 0) {
            clearInterval(timer);
            secondsLeft = 0;
            grabHS(secondsLeft);
            console.log(secondsLeft);
            timeEl.textContent = "";
            allDone();
        }
    }, 1000)

}
//Getting local storage 
function getWinnerCircle() {
    winners = JSON.parse(window.localStorage.getItem("HighScore")) || [];
    var storeHighScores = winners;

    console.log(storeHighScores);

}

//Setting Local Storage
function winnerCircle(x, y) {

    winners.push(HighScore);
    console.log(winners);
    localStorage.setItem("HighScore", JSON.stringify(winners));
}


//Starts the page 
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

        isWin = false;
        secondsLeft = 20;
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
    olEL.setAttribute("id", "ol");
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
// The Second question
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
//The Third question
function thirdQuestion() {
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
                allDone()
            }
            if (event.target.value === "For Loops") {
                secondsLeft -= 10;
                console.log("not the mommie1");
                allDone()
            } else if (event.target.value === "Arrays") {
                secondsLeft -= 10;
                console.log("not the mommie2");
                allDone()
            } else if (event.target.value === "Backpack") {
                secondsLeft -= 10;
                console.log("not the mommie3");
                allDone()
            }
        }
    })
}

function allDone(sec) {
    isWin = true;
    headEl.textContent = "ALL DONE!!"
    //Made the para
    var finalPara = document.createElement("p");
    finalPara.setAttribute("style", "font-size: 18px; margin-left: 38px;")
    finalPara.textContent = "Your final score is " + secondsLeft;
    //remvoed the li
    var li = document.querySelector(".li0")
    li.remove();
    var li1 = document.querySelector(".li1")
    li1.remove();
    var li2 = document.querySelector(".li2")
    li2.remove();
    var li3 = document.querySelector(".li3")
    li3.remove();
    //made the header
    main.appendChild(finalPara);
    //created the input
    var finalInput = document.createElement("input");
    finalInput.setAttribute("placeholder", "Write Initials")
    finalInput.setAttribute("style", "position: absolute; left: 26px; border-radius: 10px; font-size: large;");
    main.appendChild(finalInput);

    //made the button 
    var finalBtn = document.createElement("button");
    finalBtn.setAttribute("style", "font-size:large; background-color: black; color: white; left: 213px; border-radius: 10px; position: relative;")
    finalBtn.setAttribute("data", "Submit")
    finalBtn.textContent = "Submit";
    main.appendChild(finalBtn);
    console.log("close");

    finalBtn.addEventListener("click", function () {
        sec = secondsLeft;
        HighScore.score = sec;
        console.log(secondsLeft, "lets go");
        var nameYa = finalInput.value;
        console.log(nameYa);
        HighScore.name = nameYa;
        console.log(HighScore);
        winnerCircle(secondsLeft, nameYa);
        screenHigh();

    })
}

function screenHigh() {
    headEl.textContent = "The BIG HIGH SCORE LIST"
    //Removing the elements not needed for page. 
    var input = document.querySelector("input");
    input.remove();
    var button = document.querySelector("button");
    button.remove();
    var par = document.querySelector("p");
    par.remove();
    getWinnerCircle()
    var olEl = document.createElement("ol");
    main.appendChild(olEl);

    console.log(HighScore);
    //makes the list for HighScores 
    for (let i = 0; i < winners.length; i++) {
        var li = document.createElement("li");
        li.setAttribute("class", "li" + [i]);
        li.setAttribute("style", "background-color: grey;");
        document.querySelector("ol").appendChild(li);
        li.textContent = winners[i].name + ": High Score: " + winners[i].score;
    }

    //makes buttons clear
    var clearBtn = document.createElement("button");
    clearBtn.setAttribute("style", "font-size:large; background-color: black; color: white; left: 213px; border-radius: 10px; position: relative;")
    clearBtn.setAttribute("data", "Clear");
    clearBtn.setAttribute("id", "clear");
    clearBtn.textContent = "Clear";
    main.appendChild(clearBtn);


    //Clear localstorage and li elements.
    function clearFunction() {
        var olEl = document.querySelector("ol");
        var olElChild = olEl.lastElementChild;
        while (olElChild) {
            olEl.removeChild(olElChild);
            olElChild = olEl.lastElementChild;
        }

        localStorage.removeItem("HighScore");
    }

    document.getElementById("clear").onclick = clearFunction;

    //Makes go back button 
    var goBackBtn = document.createElement("button");
    goBackBtn.setAttribute("style", "font-size:large; background-color: black; color: white; left: 213px; border-radius: 10px; position: relative;");
    goBackBtn.setAttribute("data", "Go Back");
    goBackBtn.setAttribute("id", "clear1");
    goBackBtn.textContent = "Go Back";
    main.appendChild(goBackBtn);

    
    
    
    
  document.querySelector("#clear1").addEventListener("click", function(){
      location.reload();
  })


}

//Button maker
function buttonMaker(array) {
    for (i = 0; i < array.length; i++) {
        var li = document.createElement("li");
        li.setAttribute("class", "li" + [i]);
        document.querySelector("ol").appendChild(li);
        var button = document.createElement("button");
        button.textContent = array[i];
        button.setAttribute("style", "color: white; background-color: black; border: black solid; border-radius: 10px; font-size: 15px; z-index: 1;");
        button.setAttribute("class", "button" + [i]);
        button.setAttribute("value", array[i]);
        li.append(button);
    }
}




init();
startPage();


// you can make a class with the presets and add it to your next page elements. 