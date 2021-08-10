var themeButton = document.getElementById('theme-switch');
var dataThemeElements = document.querySelectorAll('[data-theme]');

var theme = localStorage.getItem('current-theme');

var trans = () => {
	document.documentElement.classList.add('transition');
	window.setTimeout(() => {
		document.documentElement.classList.remove('transition');
	}, 1000);
};

if (!theme) {
	localStorage.setItem('current-theme', 'light');
	theme = localStorage.getItem('current-theme');
}
if (theme === 'dark') {
	dataThemeElements.forEach((item) => {
		trans();
		item.setAttribute('data-theme', 'dark');
	});
}

themeButton.addEventListener('click', function () {
	var currentTheme = localStorage.getItem('current-theme');

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

function hideShowMenu() {
	var x = document.querySelector('#open-navbar1');
	if (x.style.display === 'none') {
		trans();
		x.style.display = 'block';
	} else {
		trans();
		x.style.display = 'none';
	}
}
