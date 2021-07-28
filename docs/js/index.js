// Current Time

const clock = document.getElementById('clock');

const getHour = () => {
  const time = new Date().toLocaleString('en-US', {
    timeZone: 'America/Bogota',
    hour12: true,
    timeStyle: 'medium',
  });
  clock.innerHTML = `${time} &#8641; Colombia`;
};

setInterval(getHour, 1000);

// Show icon according to current time

const sun = document.querySelector('.sun-icon');
const moon = document.querySelector('.moon-icon');

const showIcon = () => {
  const hour = new Date().getUTCHours();
  console.log(hour);
  if (hour < 0 || hour > 11) {
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

//Navbar scroll

const links = document.querySelectorAll('.link');
const banner = document.querySelector('.banner');
links.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const bannerHeight = banner.getBoundingClientRect().height;
    let position = element.offsetTop - bannerHeight;
    window.scrollTo({
      left: 0,
      top: position,
    });

    const viewportWidth = document.documentElement.clientWidth;
    if (viewportWidth < 576) {
      e.currentTarget.style.textDecoration = 'none';
    } else {
      e.currentTarget.style.textDecoration = 'line-through';
    }
  });
});

///Footer Text Animation

// SVG path length
const footerSvg = document.querySelector('#thank-msg__svg path');
// console.log(footerSvg.getTotalLength());

//Footer back to top button
const upwardBtn = document.querySelector('.upward-btn a');
upwardBtn.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    left: 0,
    top: 0,
  });
});

// get the element to animate
const element = document.querySelector('#thank-msg__svg path');
const toFillElement = document.querySelector('#thank-msg__svg');
const elementHeight = element.clientHeight;

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

// check if element is in view
function inView() {
  // get window height
  const windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  const scrollY = window.scrollY || window.pageYOffset;
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  const scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  const elementPosition =
    element.getBoundingClientRect().top + scrollY + elementHeight;

  // console.log(`ScrollY: ${scrollY},
  // windowHeight: ${windowHeight},
  // elementHeight: ${elementHeight},
  // elementgetBoundingClientRecttop: ${element.getBoundingClientRect().top},
  // scrollPosition: ${scrollPosition},
  // elementPosition: ${elementPosition} `);

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  return false;
}

// animate element when it is in view
function animate() {
  // is element in view?
  if (inView()) {
    // element is in view, add class to element
    element.classList.add('animate-line');
    toFillElement.classList.add('animate-fill');
  } else {
    element.classList.remove('animate-line');
    toFillElement.classList.remove('animate-fill');
  }
}
