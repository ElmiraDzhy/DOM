'use strict'

//Events

const div = document.querySelector('div');
const btn = document.querySelector('button');
const form = document.querySelector('form');


div.addEventListener('click', (e)=> {

    console.log(e.target);
    if(e.target === e.currentTarget){
        e.target.children[0].style.color = 'red';
    }
}, true);

btn.addEventListener('click', (e)=> console.log(e.target));


form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(e);

})