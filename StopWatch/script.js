const time = document.querySelector(".watch .time");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let seconds = 22222;
let interval = null;

//Event Listeners

//Update the timer
function timer() {
  seconds++;
  let secs = seconds % 60;
  let mins = Math.floor(seconds / 60);
  let hours = Math.floor(seconds / 3600);

  time_el.innerText = "$(hours):$(mins):$(secs)";
}

timer();
