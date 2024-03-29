let themeButton = document.getElementById('theme-switch');
let dataThemeElements = document.querySelectorAll('[data-theme]');

let theme = localStorage.getItem('current-theme');

let trans = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 1000);
};

if (!theme) {
  localStorage.setItem('current-theme', 'dark');
  theme = localStorage.getItem('current-theme');
}
if (theme === 'dark') {
  dataThemeElements.forEach((item) => {
    trans();
    item.setAttribute('data-theme', 'dark');
  });
}

themeButton.addEventListener('click', function () {
  let currentTheme = localStorage.getItem('current-theme');

  if (currentTheme === 'light') {
    localStorage.setItem('current-theme', 'dark');
    dataThemeElements.forEach((item) => {
      trans();
      item.setAttribute('data-theme', 'dark');
    });
  } else if (currentTheme === 'dark') {
    localStorage.setItem('current-theme', 'light');
    dataThemeElements.forEach((item) => {
      trans();
      item.setAttribute('data-theme', 'light');
    });
  }
});

window.hideShowMenu = function () {
  let x = document.querySelector('#open-navbar1');
  if (x.style.display === 'none') {
    trans();
    x.style.display = 'block';
  } else {
    trans();
    x.style.display = 'none';
  }
};

window.githubMouseOver = function (event) {
  event.target.src = require('../img/icons/github-alt-light.svg');
};

window.githubMouseOut = function (event) {
  event.target.src = require('../img/icons/github-alt.svg');
};

window.externalLinkMouseOver = function (event) {
  event.target.src = require('../img/icons/external-link-light.svg');
};

window.externalLinkMouseOut = function (event) {
  event.target.src = require('../img/icons/external-link-alt.svg');
};
