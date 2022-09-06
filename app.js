// console.log("It\'s working")
let buttonEl = document.getElementById("btn-el")
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")

//list of things the duck can say or the duck's vocabullaries / libraries of thoughts
const duckTalk = [
    "Oh wow, is it true?",
    "Really? Is that how it works?",
    "Wait... How did you do it again?",
    "I have never thought of that",
    "You are smart",
    "So... does it involve something else?",
    "Is that it?",
    "Are you sure?",
    "You are a great teacher",
    "I love it!",
    "Care to elaborate?",
    "That's sophisticated",
    "Have you tried turning it on and off again?",
    "Quack",
    "Quack Quack Quack",
    "???",
    "Okay, what now?",
    "That's crazy",
    "Eureka!",
    "hmmm.....",
    "......",
    "Ok",
    "yes?",
    "really?",
    "huh"
]

//What happens after the button clicks
buttonEl.addEventListener("click",function(){
    //create a rondom math number and assign it with the duckTalk array so that it could output random text
    let randomIndex = Math.floor(Math.random()*duckTalk.length)
    // let unorthodox = duckTalk[randomIndex]
    ulEl.innerHTML += `<li><strong>You : </strong>${inputEl.value}</li>
                        <br>
                        <li><strong>Duck : </strong>${duckTalk[randomIndex]}</li>
                        <br>` 
    inputEl.value =""
    // console.log(duckTalk[randomIndex])
    
})

// function displayWord(){
// }
// console.log(duckTalk[9])