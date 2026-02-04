const sliderContainer = document.querySelector('.slider-container');

sliderContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    sliderContainer.scrollLeft += e.deltaY;
});

 // JavaScript to open and close the popup

