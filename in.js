

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const san = document.querySelector('.holy_disk');
  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let sanCenter = san.offsetHeight / 15;

    if (scrollTop >= sanCenter) {
      san.classList.add('_actives')
      san.style.magrinTop = '${san.offsetHeight}px';
  } else {
    san.classList.remove('_actives')
    san.style.magrinTop = '0px';
  }
});
});

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const sanr = document.querySelector('.footer');
  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let sanrCenter = sanr.offsetHeight / 1;

    if (scrollTop <= sanrCenter) {
      sanr.classList.add('_actives')
      sanr.style.magrinTop = '${sanr.offsetHeight}px';
  } else {
    sanr.classList.remove('_actives')
    sanr.style.magrinTop = '0px';
  }
});
});


window.onload = function() {
  // Get the canvas and point elements
  var big = document.getElementById("big");
  var logo = document.getElementById("logo");

  // Set up the canvas size
  var logoWidth = logo.offsetWidth;
  var logoHeight = logo.offsetHeight;

  // Set up the point initial position and variables
  var centerX = logoWidth / 1.85;
  var centerY = logoHeight / 2.12;
  var radius = 2;
  var angle = 0;

  // Function to calculate the position of the point
  function calculatePosition() {
    var x = centerX + radius * Math.cos(angle);
    var y = centerY + radius * Math.sin(angle);
    var maxOffset = 15; 
    var maxRotation = 20;
    return { x: x, y: y };
  }

  // Function to update the position of the point
  function updatePosition() {
    var position = calculatePosition();
    var rotation = angle + 0;
    big.style.left = position.x + "px";
    big.style.top = position.y + "px";
  }

  // Function to animate the point
  function animate() {
    var angleIncrement = (Math.random() * 10 - 50) * Math.PI / 180;

    angle += angleIncrement;
    updatePosition();
    requestAnimationFrame(animate);
  }

  // Start the animation
  animate();
};

window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
});
