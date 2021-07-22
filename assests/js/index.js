var themeButton = document.getElementById('theme-switch');
var dataThemeElements = document.querySelectorAll('[data-theme]');
console.log(dataThemeElements);
var theme = localStorage.getItem('current-theme');
if (!theme) {
	localStorage.setItem('current-theme', 'light');
	theme = localStorage.getItem('current-theme');
}

var trans = () => {
	document.documentElement.classList.add('transition');
	window.setTimeout(() => {
		document.documentElement.classList.remove('transition');
	}, 1000);
};

themeButton.addEventListener('click', function () {
	var currentTheme = localStorage.getItem('current-theme');

	if (currentTheme === 'light') {
		localStorage.setItem('current-theme', 'dark');
		dataThemeElements.forEach((item) => {
			trans();
			item.setAttribute('data-theme', 'dark');
		});
	} else {
		localStorage.setItem('current-theme', 'light');
		dataThemeElements.forEach((item) => {
			trans();
			item.setAttribute('data-theme', 'light');
		});
	}
});
