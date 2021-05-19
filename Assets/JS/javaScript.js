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

button1El.addEventListener("click", function(){
    
})