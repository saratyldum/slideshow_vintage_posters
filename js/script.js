'use strict'

const container = document.querySelector('.slideshow__container');
const slideshowCarousel = document.querySelector('.slideshow__slider');
const slideshowItems = [...slideshowCarousel.children];
const previousButton = document.querySelector('.navigating__button--left');
const nextButton = document.querySelector('.navigating__button--right')
const navigationBar = document.querySelector('.nav');
const navigaitonDots = [...navigationBar.children];

const itemSize = slideshowItems[0].getBoundingClientRect().width;

//setter bildene på rad og rekke
const setSlidePosition = function (item, index) {
	item.style.left = itemSize * index + 'px'
};

slideshowItems.forEach(setSlidePosition);

//flytter slideshowet
function moveToSlide(slideshowCarousel, currentSlide, targetSlide) {
	slideshowCarousel.style.transform = 'translateX(-' + targetSlide.style.left + ')';
	currentSlide.classList.remove('slideshow__item--active');
	targetSlide.classList.add('slideshow__item--active');
}

//høyreknapp
nextButton.addEventListener('click', event => {
	const currentSlide = slideshowCarousel.querySelector('.slideshow__item--active');
	const nextSlide = currentSlide.nextElementSibling;

	moveToSlide(slideshowCarousel, currentSlide, nextSlide);
});

//venstreknapp
previousButton.addEventListener('click', event => {
	const currentSlide = slideshowCarousel.querySelector('.slideshow__item--active');
	const previousSlide = currentSlide.previousElementSibling;

	moveToSlide(slideshowCarousel, currentSlide, previousSlide);
});

