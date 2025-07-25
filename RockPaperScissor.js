var playerScore = 0
var computerScore = 0

function play(playerChoice){
    console.log(playerChoice)

    var cpuNumber = Math.floor(Math.random() * 3)

    if (cpuNumber == 0){
        var cpuChoice = "rock"
        document.getElementById("EnemyEmoji").textContent = "🪨"
    } else if (cpuNumber == 1){
        var cpuChoice = "paper"
        document.getElementById("EnemyEmoji").textContent = "📜"
    } else if (cpuNumber == 2){
        var cpuChoice = "scissors"
        document.getElementById("EnemyEmoji").textContent = "✂️"
    }

    document.getElementById("PlayerChose").textContent = playerChoice
    document.getElementById("EnemyChose").textContent = cpuChoice

    if (playerChoice == cpuChoice){
        document.getElementById("result").textContent = "It's a tie!"
        if (playerChoice == "rock"){
            document.getElementById("Emoji").textContent = "🪨"
        }
        if (playerChoice == "paper"){
            document.getElementById("Emoji").textContent = "📜"
        }
        if (playerChoice == "scissors"){
            document.getElementById("Emoji").textContent = "✂️"
        }
        if (cpuChoice == "rock"){
            document.getElementById("EnemyEmoji").textContent = "🪨"
        }
        if (cpuChoice == "paper"){
            document.getElementById("EnemyEmoji").textContent = "📜"
        }
        if (cpuChoice == "scissors"){
            document.getElementById("EnemyEmoji").textContent = "✂️"
        }
    } else {

        if (playerChoice == "rock"){
            document.getElementById("Emoji").textContent = "🪨"
            if (cpuChoice == "scissors"){
                document.getElementById("result").textContent = "player Wins."
                playerScore++
                document.getElementById("score").textContent = "Player" + playerScore + "/Computer" + computerScore
            } else if (cpuChoice == "paper"){
                document.getElementById("result").textContent = "CPU wins."
                computerScore++
                document.getElementById("score").textContent = "Player" + playerScore + "/Computer" + computerScore
            }
        }

        if (playerChoice == "paper"){
            document.getElementById("Emoji").textContent = "📜"
            if (cpuChoice == "rock"){
                document.getElementById("result").textContent = "player Wins."
                playerScore++
                document.getElementById("score").textContent = "Player" + playerScore + "/Computer" + computerScore
            } else if (cpuChoice == "scissors"){
                document.getElementById("result").textContent = "CPU wins."
                computerScore++
                document.getElementById("score").textContent = "Player" + playerScore + "/Computer" + computerScore
            }
        }

        if (playerChoice == "scissors"){
            document.getElementById("Emoji").textContent = "✂️"
            if (cpuChoice == "paper"){
                document.getElementById("result").textContent = "Player Wins."
                playerScore++
                document.getElementById("score").textContent = "Player" + playerScore + "/Computer" + computerScore
            } else if (cpuChoice == "rock"){
                document.getElementById("result").textContent = "CPU wins."
                computerScore++
                document.getElementById("score").textContent = "Player" + playerScore + "/Computer" + computerScore
            }
        }

    }

    console.log(cpuChoice)
}