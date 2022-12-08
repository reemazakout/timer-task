const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const start = document.getElementById("start")
const reset = document.getElementById("reset")
const finish = document.getElementById("finish")
const setTime = document.getElementById("setTime")

/* by using prompt */ /* stop watch لتحديد مدة التايمر في ال */
setTime.onclick = _ => {
   let HOURS = prompt("hours ")
    hours.innerText = HOURS;
    let MINUTES = prompt("minites")
    minutes.innerText = MINUTES;
    let SECONDS = prompt("seconds")
    seconds.innerText = SECONDS;

}

start.onclick = _ => {
    if (start.classList.contains("start")) {
        start.classList.remove("start");
        start.classList.add("pause");
        start.innerText = "pause"
        myinterval = setInterval(decrement, 1000);
    }

    else if (start.classList.contains("pause")) {
        start.classList.remove("pause");
        start.classList.add("start");
        start.innerText = "start"
        clearInterval(myinterval);
    }

}

reset.onclick = _ => {

    clearInterval(myinterval);
    finish.style.display = "none"  
    hours.innerText = "00";
    minutes.innerText = "5";
    seconds.innerText = "00";
    start.classList.remove("pause");
    start.classList.add("start");
    start.innerText = "start"
}


function decrement() {

    finish.style.display = "none"  

    if (seconds.innerText > 0) {
        seconds.innerText -= 1
    } else if (seconds.innerText == 0) {
        if (minutes.innerText != 0) {
            minutes.innerText -= 1
            seconds.innerText = 59
        } else if (hours.innerText != 0) {
            hours.innerText -= 1
            minutes.innerText = 60
            seconds.innerText = 60
        } else {
            finish.style.display = "block"  
        }
    }
}



