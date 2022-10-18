'use strict'

const container = document.querySelector('.slideshow__container');
const slideshowCarousel = document.querySelector('.slideshow__slider');
const slideshowItems = [...slideshowCarousel.children];
const previousButton = document.querySelector('.navigating__button--left');
const nextButton = document.querySelector('.navigating__button--right')
const navigationBar = document.querySelector('.nav');
const navigationDots = [...navigationBar.children];

const itemSize = slideshowItems[0].getBoundingClientRect().width;

//setter bildene på rad og rekke
const setSlidePosition = function (item, index) {
	item.style.left = itemSize * index + 'px'
};

slideshowItems.forEach(setSlidePosition);

//flytter slideshowet
function moveToSlide (slideshowCarousel, currentSlide, targetSlide) {
	slideshowCarousel.style.transform = 'translateX(-' + targetSlide.style.left + ')';
	currentSlide.classList.remove('slideshow__item--active');
	targetSlide.classList.add('slideshow__item--active');

	//if mellom to slides, event.target.closest('item')
	// if
}

//OPPDATERER DOTS
function updateDots (currentDot, targetDot) {
	currentDot.classList.remove('nav__button--active');
	targetDot.classList.add('nav__button--active');
}

//høyreknapp
nextButton.addEventListener('click', event => {
	const currentSlide = slideshowCarousel.querySelector('.slideshow__item--active');
	const nextSlide = currentSlide.nextElementSibling;
	const currentDot = navigationBar.querySelector('.nav__button--active');
	const nextDot = currentDot.nextElementSibling;


	moveToSlide(slideshowCarousel, currentSlide, nextSlide);
	updateDots (currentDot, nextDot);
});


//venstreknapp
previousButton.addEventListener('click', event => {
	const currentSlide = slideshowCarousel.querySelector('.slideshow__item--active');
	const previousSlide = currentSlide.previousElementSibling;
	const currentDot = navigationBar.querySelector('.nav__button--active');
	const previousDot = currentDot.previousElementSibling;


	moveToSlide(slideshowCarousel, currentSlide, previousSlide);
	updateDots (currentDot, previousDot);
});


//flytt til dot slide
navigationBar.addEventListener('click', event => {
	//hvilken dot ble trykket
	const targetDot = event.target;
	
	const currentSlide = slideshowCarousel.querySelector('.slideshow__item--active');
	const currentDot = navigationBar.querySelector('.nav__button--active');
	const targetIndex = navigationDots.findIndex(dot => dot === targetDot);
	const targetSlide = slideshowItems[targetIndex]

	moveToSlide(slideshowCarousel, currentSlide, targetSlide);
	updateDots (currentDot, targetDot);

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

});


//SKRIV OM SÅ EVENTLISTENER PÅ TOPP OGSÅ FUNKSJONER
