function fullscreen() {
	return document.getElementsByTagName('body')[0].requestFullscreen();
}

function elementFullScreen(dom) {
	return dom.requestFullscreen();
}
