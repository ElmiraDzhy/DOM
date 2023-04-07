'use strict'

//Events

const btn = document.querySelector('button');
const section = document.querySelector('section');
const div = document.querySelector('div');


btn.addEventListener('click', (e) => {
    console.log(console.log(e));
    e.target.style.backgroundColor = 'blue';
}, true);
section.addEventListener('click', (e) => console.log(console.log(e)), true);
div.addEventListener('click', (e) => console.log(console.log(e)), true);

const event = new Event('click');
console.log(event);

const p = document.querySelector('p');
p.addEventListener('click', (e)=> {e.target.style.color = 'yellow'});