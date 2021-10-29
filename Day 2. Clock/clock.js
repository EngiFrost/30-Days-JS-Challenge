const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const offset = 90;

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + offset;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minuteDegrees = (minutes / 60) * 360 + offset;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + offset;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  if (seconds == 0) {
    secondHand.style.transitionDuration = '0s';
    minuteHand.style.transitionDuration = '0s';
    hourHand.style.transitionDuration = '0s';
  } else {
    secondHand.style.transitionDuration = '0.05s';
    minuteHand.style.transitionDuration = '0.05s';
    hourHand.style.transitionDuration = '0.05s';
  }
  
  console.log(hours, minutes, seconds);
}

setInterval(setDate, 1000); // trigger setDate function every second
