'use strict'

//Events

const div = document.querySelector('div');
const btn = document.querySelector('button');
const form = document.querySelector('form');


div.addEventListener('click', (e)=> {
    console.log(e.target);
    e.stopPropagation();   
}, true);

btn.addEventListener('click', (e)=> console.log(e.target));


form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(e);

})