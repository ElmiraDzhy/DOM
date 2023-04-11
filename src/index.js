'use strict'

//Unit 49

const btn = document.querySelector('button');

btn.addEventListener('click', createSquare);

function createSquare(){

    const div = document.createElement('div');
    div.classList.add('circle');
    const parentWidth = document.body.offsetWidth;
    const parentHeight = document.body.offsetHeight;

    div.style.top = `${getRandomCoordinate(0, parentHeight)}px`;
    div.style.left = `${getRandomCoordinate(0, parentWidth)}px`;

    document.body.append(div);
}


function getRandomCoordinate(min, max){
    return Math.random() * (max - min) + min;
}
