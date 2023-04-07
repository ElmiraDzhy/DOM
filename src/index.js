'use strict'

//Events

const parent = document.querySelector('section');
const div = document.querySelector('.score');
const btn = document.querySelector('button');


let counter = 0;


function increment(){
    counter++;
    updateView();

}
function decrement(){
    counter--;
    updateView();

}

function updateView(){
    div.textContent = counter;

}





parent.addEventListener('click', (e)=>{
    if(e.currentTarget === e.target){
        increment();
    }else{
        decrement();
    }
})