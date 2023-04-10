'use strict'

//Unit 49

const gamefield = document.querySelector('.gamefield');

const box = document.querySelector('.box')

let coordinateY  = 0;
let coordinateX  = 0;


gamefield.addEventListener('click', (e) => {
    if(e.target === e.currentTarget){
        coordinateY = e.clientY - box.offsetWidth/2;
        coordinateX = e.clientX - box.offsetHeight/2;
    
        box.style.right = `${coordinateX}px`;
        box.style.left = `${coordinateX}px`;
        box.style.top = `${coordinateY}px`;
        box.style.bottom = `${coordinateY}px`;

    }
});