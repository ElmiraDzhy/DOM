'use strict'

//Unit 49

const input = document.querySelector('[name="passInput"]');
const passValidation = document.querySelector('.pass-validation');

input.addEventListener('change', ({target: {value: {length}}}) => {


    clearClasses();

    if(length < 5){
        showMsg('Weak', 'show-weak');
    } 

    if(length >= 5 && input.value.length <= 7){
        showMsg('Middle', 'show-middle');
    }
    
    if(length >= 8) {
        showMsg('Strong', 'show-good');
    }
});

function showMsg(type, cls){
    passValidation.textContent = type;
    passValidation.classList.add(cls);
}

function clearClasses(){
    passValidation.classList.remove('show-weak');
    passValidation.classList.remove('show-middle');
    passValidation.classList.remove('show-good');
}
