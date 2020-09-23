const openModalButton = document.querySelector('#open-modal')
const closeModalButton = document.querySelector('#close-modal')
const modalOverlay = document.querySelector('.overlay')

openModalButton.addEventListener('click', function(){
    modalOverlay.style.display = 'block'
})

closeModalButton.addEventListener('click' , function(){
    modalOverlay.style.display = 'none'
})

modalOverlay.style.display = 'none'
