var canvas = document.getElementById("gameboard")
var score = document.getElementById("Score")
var animation

var rightPressed = false
var leftPressed = false
var PlayerPoints = 0
var aiPoints = 0


function keyDownHandler(event){
    if (event.key == "ArrowRight"){
        rightPressed = true
    } else if (event.key == "ArrowLeft"){
        leftPressed = true
    }
}

function keyUpHandler(event){
    if (event.key == "ArrowRight"){
        rightPressed = false 
    } else if (event.key == "ArrowLeft"){
        leftPressed = false
    }
}

document.addEventListener("keydown", keyDownHandler)
document.addEventListener("keyup", keyUpHandler)

var ball = {
    x: canvas.width /2,
    y: 10,
    speedx: 4,
    speedy: 4,
    width: 10,
}

var paddle = {
    x: canvas.width / 2,
    y: canvas.height - 15,
    width: 100,
    height: 15,
    speed: 8,
}

var paddle2 = {
    x: canvas.width / 2,
    y: canvas.height - 595,
    width: 100,
    height: 15,
    speed: 8,
}

var context = canvas.getContext('2d')

function drawBall(){
    context.beginPath()
    context.arc(ball.x, ball.y, ball.width, 0, Math.PI * 2)
    context.fillStyle = "#FCFCFD"
    context.fill()
    context.closePath()
}

function drawpaddle(){
    context.beginPath()
    context.rect(paddle.x, paddle.y, paddle.width, paddle.height)
    context.fillStyle = "#FCFCFD"
    context.fill()
    context.closePath()
}

function drawpaddle2(){
    context.beginPath()
    context.rect(paddle2.x, paddle2.y, paddle2.width, paddle2.height)
    context.fillStyle = "#FCFCFD"
    context.fill()
    context.closePath()
}

function moveBall(){
    ball.x += ball.speedx;
    ball.y += ball.speedy;
}

function movePaddle(){
    if (rightPressed){
        paddle.x += paddle.speed;
    } else if (leftPressed){
        paddle.x -= paddle.speed;
    }
}

function movePaddle2(){
    if (ball.x < paddle2.x + 1){
        paddle2.x -= paddle2.speed
    }
    if (ball.x > paddle2.x + paddle2.width + 1){
        paddle2.x += paddle2.speed
    }
}

function collisionDetection(){
    if (ball.x + ball.speedx > canvas.width - ball.width){
        ball.speedx = -ball.speedx
    }

    if (ball.x + ball.speedx < 0 + ball.width){
        ball.speedx = -ball.speedx
    }

    if (ball.y + ball.speedy > canvas.height - ball.width){
        if (ball.x > paddle.x && ball.x < paddle.x + paddle.width){
            ball.speedy = -ball.speedy
            if (ball.speedx > 0){
                ball.speedx = ball.speedx + 0.5
            } else {
                ball.speedx = ball.speedx - 0.5
            }
            if (ball.speedy > 0){
                ball.speedy = ball.speedy + 0.5
            } else{
                ball.speedy = ball.speedy + 0.5
            }
            console.log(ball.speedx);
        } else {
            //game over
            aiPoints++
            ball.y = canvas.height /2
            ball.x = 15
            ball.speedx = 4
            ball.speedy = 4
            return true
            
        }
    }

    if (ball.y + ball.speedy < 0 + ball.width){
        if (ball.x > paddle2.x && ball.x < paddle2.x + paddle2.width){
            ball.speedy = -ball.speedy
            if (ball.speedx > 0){
                ball.speedx = ball.speedx + 0.5
            } else {
                ball.speedx = ball.speedx - 0.5
            }
            if (ball.speedy > 0){
                ball.speedy = ball.speedy + 0.5
            } else {
                ball.speedy = ball.speedy - 0.5
            }
            console.log(ball.speedx);
        } else {
            PlayerPoints++
            ball.y = canvas.height /2
            ball.x = 15
            ball.speedx = 4
            ball.speedy = 4
            return true
        }
    }
    
    return false
}

function gameLoop(){
    context.clearRect(0, 0, canvas.width, canvas.height)
    score.textContent = PlayerPoints + "/" + aiPoints

    drawBall()
    drawpaddle()
    drawpaddle2()

    var wentUnder = collisionDetection()
    moveBall()
    movePaddle()
    movePaddle2()

    if (wentUnder){
        setTimeout(function(){
            requestAnimationFrame(gameLoop)
        }, 3000)
    } else {
        requestAnimationFrame(gameLoop)
    }


}

gameLoop()