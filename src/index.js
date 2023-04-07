'use strict'

//Events

const btn = document.querySelectorAll('.btn');

function clickHandler(){
    
    this.style.backgroundColor = 'red';

    btn.forEach((button)=> button.removeEventListener('click', clickHandler));

}

btn.forEach((button) => button.addEventListener('click', clickHandler));



