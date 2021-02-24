const divMin = document.getElementById("divMin");
const divSec = document.getElementById("divSec");
const divMsec = document.getElementById("divMsec");
const btnStart = document.getElementById("btnStart");
const btnPause = document.getElementById("btnPause");
const btnResume = document.getElementById("btnResume");
const btnReset = document.getElementById("btnReset");

let min = 0,
  sec = 0,
  msec = 0,
  storeCounter;

btnStart.onclick = () => {
  btnStart.style.display = "none";
  btnPause.style.display = "block";
  startStopwatch();
};

btnPause.onclick = () => {
  btnPause.style.display = "none";
  btnResume.style.display = "block";
  btnReset.style.display = "block";
  clearInterval(storeCounter);
};

btnResume.onclick = () => {
  btnResume.style.display = "none";
  btnReset.style.display = "none";
  btnPause.style.display = "block";
  startStopwatch();
};

btnReset.onclick = () => {
  min = 0;
  sec = 0;
  msec = 0;
  divMin.innerText = makeConsistent(min, 2);
  divSec.innerText = makeConsistent(sec, 2);
  divMsec.innerText = makeConsistent(msec, 3);
  btnResume.style.display = "none";
  btnReset.style.display = "none";
  btnStart.style.display = "block";
};

function startStopwatch() {
  storeCounter = setInterval(() => {
    msec += 50;
    if (msec === 1000) {
      msec = 0;
      sec += 1;
    }
    if (sec === 60) {
      sec = 0;
      min += 1;
    }
    divMin.innerText = makeConsistent(min, 2);
    divSec.innerText = makeConsistent(sec, 2);
    divMsec.innerText = makeConsistent(msec, 3);
  }, 50);
}

function makeConsistent(digit, len) {
  const str = String(digit);
  if (str.length === len) {
    return str;
  }
  if (len === 3) {
    if (str.length === 1) {
      return "00" + str;
    } else if (str.length === 2) {
      return "0" + str;
    }
  }
  if (len === 2) {
    if (str.length === 1) {
      return "0" + str;
    }
  }
}
