'use strict'

//Unit 49

const btn = document.querySelector('button');

btn.addEventListener('click', createSquare);

function createSquare(){
    const div = document.createElement('div');
    div.classList.add('circle');
    document.body.append(div);


}