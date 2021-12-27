const hoursHand = document.querySelector(".hand-hours");
const minutesHand = document.querySelector(".hand-minutes");
const secondsHand = document.querySelector(".hand-seconds");

const setTime = () => {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds() / 60;
  const minutes = (seconds + currentDate.getMinutes()) / 60;
  const hours = (minutes + currentDate.getHours()) / 12;

  hoursHand.style.setProperty("--rotation", hours * 360);
  minutesHand.style.setProperty("--rotation", minutes * 360);
  secondsHand.style.setProperty("--rotation", seconds * 360);
};

setInterval(setTime, 1000);
