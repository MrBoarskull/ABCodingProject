var randomNum = Math.floor(Math.random() * 40)+1

function pickNumber(){
    randomNum = Math.floor(Math.random() * 40)+1
    document.getElementById("Number").textContent = randomNum
}

function ChangeColor(){
    var randomColorNum = Math.floor(Math.random() * 225)+1
    var randomColorNum2 = Math.floor(Math.random() * 225)+1
    var randomColorNum3 = Math.floor(Math.random() * 225)+1
    document.getElementById("background").style.backgroundColor = "rgb(" + randomColorNum + "," + randomColorNum2 + "," + randomColorNum3 +")"
}
