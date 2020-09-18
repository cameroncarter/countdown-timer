const daysAll = document.getElementById("days");
const hoursAll = document.getElementById("hours");
const minutesAll = document.getElementById("minutes");
const secondsAll = document.getElementById("seconds");

const newYears = "Jan 1 2021";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysAll.innerHTML = days;
  hoursAll.innerHTML = formatTime(hours);
  minutesAll.innerHTML = formatTime(minutes);
  secondsAll.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Initial call

countdown();

setInterval(countdown, 1000);
