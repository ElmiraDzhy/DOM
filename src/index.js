'use strict'

//Unit 49

document.addEventListener('keydown', (e) => {
    const SIZE = 10;
    const box =  e.currentTarget.body.children[0];

    const y = box.offsetTop;
    const x =  box.offsetLeft;

    console.log(e.code);


    switch(e.code){

        case 'ArrowLeft': 
            box.style.left = `${x - SIZE}px`;
            break;

        case 'ArrowRight': 
            box.style.left = `${x + SIZE}px`;
            break;

        case 'ArrowUp':
            box.style.top = `${y - SIZE}px`;
            break;

        case 'ArrowDown':
            box.style.top = `${y + SIZE}px`;
            break;
    }



} );


