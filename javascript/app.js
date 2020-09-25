const openModalButton = document.querySelector('#open-modal')
const closeModalButton = document.querySelector('#close-modal')
const modalOverlay = document.querySelector('.overlay')

openModalButton.addEventListener('click', function(){
    modalOverlay.style.display = 'block'
    carousel.style.display = 'none'
})

closeModalButton.addEventListener('click' , function(){
    modalOverlay.style.display = 'none'
    carousel.style.display = 'block'
})

const carousel = document.querySelector('.carousel')
const slides = document.getElementsByClassName('carousel-item')
const prevButton = document.getElementById('prev-button')
const nextButton = document.getElementById('next-button')
let slidePosition = 0;
const totalSlides = slides.length;

nextButton.addEventListener('click' , moveToNextSlide)

prevButton.addEventListener('click' , moveToPrevSlide)

function hideAllSlides(){
    //loop through all the slides
    for(slide of slides){
        slide.classList.remove('carousel-item-visible')
        slide.classList.add('carousel-item-hidden')
    }
}

function moveToNextSlide(){
    hideAllSlides() //We want to invoke this immediately 

    if(slidePosition === totalSlides-1){
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    slides[slidePosition].classList.add('carousel-item-visible')
}

function moveToPrevSlide(){
    hideAllSlides()

    if(slidePosition === 0){
        slidePosition = totalSlides -1
    } else {
        slidePosition--;
    }

    slides[slidePosition].classList.add('carousel-item-visible')
}