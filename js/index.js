// Current Time

const clock = document.getElementById('clock');

const getHour = () => {
  const time = new Date().toLocaleString('en-US', {
    timeZone: 'America/Bogota',
    hour12: true,
    timeStyle: 'medium',
  });
  clock.innerHTML = `${time} barranquilla`;
};

setInterval(getHour, 1000);

// Show icon according to current time

const sun = document.querySelector('.sun-icon');
const moon = document.querySelector('.moon-icon');

const showIcon = () => {
  const hour = new Date().getUTCHours();
  console.log(hour);
  if (hour < 1 || hour > 12) {
    moon.style.display = 'none';
    sun.style.display = 'inline-block';
  } else {
    moon.style.display = 'inline-block';
    sun.style.display = 'none';
  }
};

showIcon();

// Logo transition

const logo = document.getElementById('logo');
const words = ['mdn', 'mesita', 'de noche'];
function getRandomNumber() {
  return Math.floor(Math.random() * words.length);
}

const showLogoWords = () => {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  logo.innerHTML = words[randomNumber];
};

setInterval(showLogoWords, 10000);
