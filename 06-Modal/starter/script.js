'use strict';

const modal = document.querySelector('.modal');
// console.log(modal.textContent);
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

//Opens the modal
const openModel = () => {
  //Removes the 'hidden' from CSS
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// const testPrompt = message => {};
for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', openModel);
// console.log('Button Clicked');
// modal.classList.remove('hidden');
// overlay.classList.remove('hidden');

//Close the modal
const closeModal = () => {
  //Adds the 'hidden' from CSS

  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
    //     if (!modal.classList.contains('hidden')) {
    //       closeModal();
    //     }
    //     // modal.classList.add('hidden');
    //     // overlay.classList.add('hidden');
  }
});
