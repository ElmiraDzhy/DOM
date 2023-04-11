'use strict'

//Unit 49

const form = document.querySelector('form');
const errorContainer = document.querySelector('.error')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorContainer.textContent = '';
    errorContainer.classList.remove('swoh-error');
    const {emailInput, passInput} = e.target;

    const email = emailInput.value;
    const pass = passInput.value;
    if(!email.includes('@')){
        errorContainer.textContent = 'Email is not valid';
        errorContainer.classList.add('show-error');
    } else if(pass.toLowerCase().includes('qwerty') || pass.length <= 5){
        errorContainer.textContent = 'Pass is not valid';
        errorContainer.classList.add('show-error');
    }
});

