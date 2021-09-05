var main;
var container;
var favicon;

const loadDocument = function () {
	main = document.querySelector('#main');
	container = document.querySelector('#container');
	favicon = document.querySelector('#favicon');
};

const handleHomePageClicked = function () {
	container.style.display = 'none';
	main.style.display = 'block';
};

window.onload = function () {
	loadDocument();

	container.style.display = 'flex';

	favicon.addEventListener('click', handleHomePageClicked);
};
