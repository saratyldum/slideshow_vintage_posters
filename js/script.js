'use strict'

const container = document.querySelector('.slideshow__container');
const slideshowCarousel = document.querySelector('.slideshow__slider');
const slideshowItems = [...slideshowCarousel.children];
const previousButton = document.querySelector('.navigating__button--left');
const nextButton = document.querySelector('.navigating__button--right')
const navigationBar = document.querySelector('.nav');
const navigationDots = [...navigationBar.children];

const itemSize = slideshowItems[0].getBoundingClientRect().width;

/*
inspirasjon Kevin Powell:
 */



nextButton.addEventListener('click', handleNextButtonClick);
previousButton.addEventListener('click', handlePreviousButtonClick);
navigationBar.addEventListener('click', handleNavigationBarClick);


//setter bildene på rad og rekke
function setSlidePosition(item, index) {
	item.style.left = itemSize * index + 'px'
};

slideshowItems.forEach(setSlidePosition);

//handles next button
function handleNextButtonClick() {
	const currentSlide = slideshowCarousel.querySelector('.slideshow__item--active');
	const nextSlide = currentSlide.nextElementSibling;
	const currentDot = navigationBar.querySelector('.nav__button--active');
	const nextDot = currentDot.nextElementSibling;
	const nextIndex = slideshowItems.findIndex(slideshowItems => slideshowItems === nextSlide);

	moveToSlide(slideshowCarousel, currentSlide, nextSlide);
	updateDots (currentDot, nextDot);
	hideShowButtons (slideshowItems, previousButton, nextButton, nextIndex);
}


//handles previous button
function handlePreviousButtonClick() {
	const currentSlide = slideshowCarousel.querySelector('.slideshow__item--active');
	const previousSlide = currentSlide.previousElementSibling;
	const currentDot = navigationBar.querySelector('.nav__button--active');
	const previousDot = currentDot.previousElementSibling;
	const previousIndex = slideshowItems.findIndex(slideshowItems => slideshowItems === previousSlide);

	moveToSlide(slideshowCarousel, currentSlide, previousSlide);
	updateDots (currentDot, previousDot);
	hideShowButtons (slideshowItems, previousButton, nextButton, previousIndex);

}

//hides next/previous button at the beginning or end of slideshow
const hideShowButtons = (slideshowItems, previousButton, nextButton, targetIndex) => {
	if (targetIndex === 0) {
		previousButton.classList.add('is-hidden');
		nextButton.classList.remove('is-hidden');
	} else if (targetIndex === slideshowItems.length - 1) {
		previousButton.classList.remove('is-hidden');
		nextButton.classList.add('is-hidden');
	} else {
		previousButton.classList.remove('is-hidden');
		nextButton.classList.remove('is-hidden');
	}
}

//handles navigation bar
function handleNavigationBarClick() {
	const targetDot = event.target;
	
	const currentSlide = slideshowCarousel.querySelector('.slideshow__item--active');
	const currentDot = navigationBar.querySelector('.nav__button--active');
	const targetIndex = navigationDots.findIndex(dot => dot === targetDot);
	const targetSlide = slideshowItems[targetIndex]

	moveToSlide(slideshowCarousel, currentSlide, targetSlide);
	updateDots (currentDot, targetDot);
	hideShowButtons (slideshowItems, previousButton, nextButton, targetIndex);
}

//moves the slideshow
function moveToSlide (slideshowCarousel, currentSlide, targetSlide) {
	slideshowCarousel.style.transform = 'translateX(-' + targetSlide.style.left + ')';
	currentSlide.classList.remove('slideshow__item--active');
	targetSlide.classList.add('slideshow__item--active');

	//if mellom to slides, event.target.closest('item')
}

//updates navigation bar dots
function updateDots (currentDot, targetDot) {
	currentDot.classList.remove('nav__button--active');
	targetDot.classList.add('nav__button--active');
}





//flytt til dot slide
// navigationBar.addEventListener('click', event => {
// 	//hvilken dot ble trykket
// 	const targetDot = event.target;
	
// 	const currentSlide = slideshowCarousel.querySelector('.slideshow__item--active');
// 	const currentDot = navigationBar.querySelector('.nav__button--active');
// 	const targetIndex = navigationDots.findIndex(dot => dot === targetDot);
// 	const targetSlide = slideshowItems[targetIndex]

// 	moveToSlide(slideshowCarousel, currentSlide, targetSlide);
// 	updateDots (currentDot, targetDot);

	// if (targetIndex === 0) {
	// 	previousButton.classList.add('is-hidden');
	// 	nextButton.classList.remove('is-hidden');
	// }else if (targetIndex === slideshowItems.length - 1) {
	// 	previousButton.classList.remove('is-hidden');
	// 	nextButton.classList.add('is-hidden');
	// }else {
	// 	previousButton.classList.remove('is-hidden');
	// 	nextButton.classList.remove('is-hidden');
	// }

// });

