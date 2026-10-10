const timer = document.querySelector(".timer")
const strBtn = document.querySelector(".start")
const stopBtn = document.querySelector(".stop")
const resetBtn = document.querySelector(".reset")

let seconds = 0
let intervalId = null

function formatTime(totalSeconds) { //100
    const minutes = Math.floor(totalSeconds / 60) // 100/60 = Math.floor(1,7) = 1
    const seconds = totalSeconds % 60 // 100 % 60 = 40

    const formattedMin = String(minutes).padStart(2, "0")
    const formattedSec = String(seconds).padStart(2, "0")

    return `${formattedMin} : ${formattedSec}`
}

strBtn.addEventListener('click', () => {
    if (intervalId !== null) {
        return
    }

    intervalId = setInterval(() => {
        seconds += 1

        timer.textContent = formatTime(seconds)
    }, 1000)
})

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId)

    intervalId = null
})

resetBtn.addEventListener('click', () => {
    clearInterval(intervalId)

    intervalId = null
    seconds = 0
    timer.textContent = formatTime(seconds)
})

//2 

const reversCountDown = document.querySelector(".count-down-timer")
const reversCountDownBtn = document.querySelector(".start-count-down")

let minuts = 0.2
let callDownSeconds = minuts * 60
let timerIsActive = false 

reversCountDownBtn.addEventListener("click", () => {
    if (timerIsActive ) {
        return
    }
    const id = 
    setInterval(() => {
    callDownSeconds -= 1 
    reversCountDown.textContent = formatTime(callDownSeconds)
    console.log(callDownSeconds);
    
    if (callDownSeconds <= 0) {
        clearInterval(id)
    }

    }, 1000 )
    timerIsActive = true
})