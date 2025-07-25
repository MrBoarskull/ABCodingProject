var guesses = 0
var randomNum = Math.floor(Math.random() * 100)+1
var difficulty = "Normal"

function buttonPressed(){
    guesses++
    document.getElementById("guessTracker").textContent = "You have guessed " + guesses + " times."

    var userGuess = document.getElementById("userInput").value
    console.log(userGuess)

    userGuess = parseInt(userGuess)

    if (userGuess == randomNum){
        document.getElementById("ColorBox").style.backgroundColor = "rgb(0, 128, 0)"
        document.getElementById("resultText").textContent = "You won"
    }

    if (difficulty == "Normal"){ 
        if (userGuess > randomNum){
            document.getElementById("ColorBox").style.backgroundColor = "rgba(128, 0, 0, 1)"
            document.getElementById("resultText").textContent = "TOO HIGH"
        }else if (userGuess < randomNum){
            document.getElementById("ColorBox").style.backgroundColor = "rgba(128, 0, 0, 1)"
            document.getElementById("resultText").textContent = "TOO LOW"
        }
    }

    if (difficulty == "Hard"){ 
        if (userGuess > randomNum){
            document.getElementById("ColorBox").style.backgroundColor = "rgba(128, 0, 0, 1)"
            document.getElementById("resultText").textContent = "wrong"
        }else if (userGuess < randomNum){
            document.getElementById("ColorBox").style.backgroundColor = "rgba(128, 0, 0, 1)"
            document.getElementById("resultText").textContent = "wrong"
        }
    }

    if (difficulty == "Impossible"){ 
        if (userGuess > randomNum){
            document.getElementById("ColorBox").style.backgroundColor = "rgba(128, 0, 0, 1)"
            document.getElementById("resultText").textContent = "wrong"
        }else if (userGuess < randomNum){
            document.getElementById("ColorBox").style.backgroundColor = "rgba(128, 0, 0, 1)"
            document.getElementById("resultText").textContent = "wrong"
        }
    }

    
}

function Normal(){
    difficulty = "Normal"
    guesses = 0
    document.getElementById("guessTracker").textContent = "You have guessed " + guesses + " times."
    randomNum = Math.floor(Math.random() * 100)+1
    document.getElementById("Instructions").textContent = "Try to guess a number between 1 and 100."
}

function Hard(){
    difficulty = "Hard"
    guesses = 0
    document.getElementById("guessTracker").textContent = "You have guessed " + guesses + " times."
    randomNum = Math.floor(Math.random() * 100)+1
    document.getElementById("Instructions").textContent = "Try to guess a number between 1 and 100."
}

function Impossible(){
    difficulty = "Impossible"
    guesses = 0
    document.getElementById("guessTracker").textContent = "You have guessed " + guesses + " times."
    randomNum = Math.floor(Math.random() * 1000)+1
    document.getElementById("Instructions").textContent = "Try to guess a number between 1 and 1000."
}