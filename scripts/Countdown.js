const days = document.getElementsByClassName("daysTXT")[0];
const hours = document.getElementsByClassName("hoursTXT")[0];
const minutes = document.getElementsByClassName("minutesTXT")[0];
const seconds = document.getElementsByClassName("secondsTXT")[0];
const currentyear = new Date().getFullYear();
const newYearTime = new Date(`April 1 2022 08:00:00`);

function updateCountdowntime() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const m = Math.floor(diff / (1000 * 60)) % 60;
  const s = Math.floor(diff / 1000) % 60;
  days.innerText = d < 10 ? "0" + d : d;
  hours.innerText = h < 10 ? "0" + h : h;
  minutes.innerText = m < 10 ? "0" + m : m;
  seconds.innerText = s < 10 ? "0" + s : s;
}

setInterval(updateCountdowntime, 1000);
