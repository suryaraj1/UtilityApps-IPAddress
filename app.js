const navBar = document.querySelector("header");
const button = document.querySelector(".btn");
const address = document.querySelector(".ip-value");
const accordion = document.querySelectorAll(".contentBox");
const apiURL = "https://api.ipify.org/?format=json";

const getIPAddress = () => {
  fetch(apiURL)
    .then(response => response.json())
    .then(json => {
      address.innerHTML = json.ip;
    });
};

button.addEventListener('click', getIPAddress);

// navbar part starts here

window.onscroll = () => {
  const sticky = navBar.offsetTop;
  if (window.pageYOffset > sticky) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
};

// accordion part here

const runAccordion = () => {
  for (let i = 0; i < accordion.length; i += 1) {
    accordion[i].addEventListener('click', () => {
      accordion[i].classList.toggle('activate');
      for (let j = 0; j < accordion.length; j += 1) {
        if (i !== j && accordion[j].classList.contains('activate')) {
          // switches off other accordions
          accordion[j].classList.toggle('activate');
        }
      }
    });
  }
};

runAccordion();

// for the clipboard copying
new ClipboardJS('.logo.copy-btn');

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
})

sr.reveal('.title', { interval: 200 });
sr.reveal('.get-ip', { delay: 200 });
sr.reveal('.ip-wrapper', { delay: 300 });