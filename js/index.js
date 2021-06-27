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

const sun = document.querySelector('.sun-icon');
const moon = document.querySelector('.moon-icon');

const showIcon = () => {
  const hour = new Date().getUTCHours();
  //   console.log(hour);
  if (hour > 1 || hour < 12) {
    moon.style.display = 'inline-block';
    sun.style.display = 'none';
  }
};

showIcon();
