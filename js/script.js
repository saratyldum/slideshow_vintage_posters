const container = document.querySelector('.slideshow__container');
const containerInner = document.querySelector('ul');
const items = Array.from(containerInner.children);
const previousButton = document.querySelector('.navigating__button--left');
const nextButton = document.querySelector('.navigating__button--right')
const navigationBar = document.querySelector('.nav');
const navigaitonDots = Array.from(navigationBar.children);

let pressed = false;
let startx;
let x;

container.addEventListener('mousedown', handleContainerMousedown);
container.addEventListener('mouseenter', handleContainerMouseenter);
container.addEventListener('mouseup', handleContainerMouseup);
window.addEventListener('mouseup', handleWindowmouseup);
container.addEventListener('mousemove', handleContainerMousemove);

function handleContainerMousedown() {
	pressed = true;
	startx = event.screenX - containerInner.offsetLeft;
	container.style.cursor = "grabbing";
}

function handleContainerMouseenter() {
	container.style.cursor = "grab";
}

function handleContainerMouseup() {
	container.style.cursor = "grab";
}

function handleWindowmouseup() {
	pressed = false;
}

function handleContainerMousemove() {
	if(!pressed) return;
	event.preventDefault();

	x = event.screenX;

	containerInner.style.left = `${x - startx}px`;

	checkEndPoint();
}

function checkEndPoint() {
	let outerContainer = container.getBoundingClientRect();
	let innerContainer = containerInner.getBoundingClientRect();
	
	if (parseInt(containerInner.style.left) > 0) {
		containerInner.style.left = '0px'
	}else if (innerContainer.right < outerContainer.right){
		containerInner.style.left = `-${innerContainer.width - outerContainer.width}px`;
	}
}
