'use strict'

//Unit 49

const [signIn, signUp] = document.querySelectorAll('article > button');

console.dir(signIn);
console.dir(signIn.dataset.address);

signIn.dataset.newvalue = 'test';


//task #1

const btns = document.querySelectorAll('div > button');


btns.forEach((button) => {
    button.addEventListener('click', (e)=>{
        button.parentElement.style.backgroundColor = button.dataset.color;
    })
});

