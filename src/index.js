'use strict'

//Unit 49

const gamefield = document.querySelector('.gamefield');

const box = document.querySelector('.box');

const score = document.querySelector('.score');

let counter = 0;


gamefield.addEventListener('click', (e) => {
    if(e.target !== e.currentTarget){
        counter++;
        updateView();
    }
    
    const X = getRandom(0, e.currentTarget.offsetWidth - (box.offsetWidth / 2));
    const Y = getRandom(0, e.currentTarget.offsetHeight - (box.offsetHeight / 2));

    box.style.top = `${Y}px`;
    box.style.bottom = `${Y}px`;

    box.style.left = `${X}px`;
    box.style.right = `${X}px`;
});

function getRandom(min, max){
    return Math.random() * (max - min) + min;
}

function updateView(){
    score.textContent = counter;
}