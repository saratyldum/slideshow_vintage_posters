const container = document.querySelector('.slideshow__container');
const containerInner = document.querySelector('.slideshow__slider');
const items = [...containerInner.children];
const previousButton = document.querySelector('.navigating__button--left');
const nextButton = document.querySelector('.navigating__button--right')
const navigationBar = document.querySelector('.nav');
const navigaitonDots = [...navigationBar.children];

const itemSize = items[0].getBoundingClientRect().width;



nextButton.addEventListener('click', handleNextButtonOnclick);
previousButton.addEventListener('click', handlePreviousButtonOnclick);

function handleNextButtonOnclick() {
	container.scrollLeft += 416;
};


function handlePreviousButtonOnclick() {
	container.scrollLeft -= 416;
};


// Navigating buttons
// Click left
//Click right
//move to nav buttons position
//Move when clicking tastatur