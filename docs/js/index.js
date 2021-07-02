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
  if (hour < 1 || hour > 11) {
    moon.style.display = 'none';
    sun.style.display = 'inline-block';
  } else {
    moon.style.display = 'inline-block';
    sun.style.display = 'none';
  }
};

showIcon();

// Logo transition

const logo = document.getElementById('logo-toggle');
const words = ['mesita', 'de noche'];

function toggleClosure() {
  let bool = true;
  return function () {
    bool = !bool;
    return bool;
  };
}
const toggleBool = toggleClosure();

const showLogoWords = () => {
  if (toggleBool()) {
    logo.innerHTML = words[1];
  } else {
    logo.innerHTML = words[0];
  }
};

setInterval(showLogoWords, 10000);

// Random generator
function getRandomNumber() {
  return Math.floor(Math.random() * words.length);
}
