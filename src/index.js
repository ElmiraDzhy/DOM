'use strict'

//Unit 49

const btn = document.querySelector('#show');
const passInput = document.querySelector('input');


const attr = document.createAttribute('type');
attr.value = 'password';

btn.addEventListener('click', () => {
    attr.value = attr.value === 'password' ?  'text' :  'password';
    passInput.setAttributeNode(attr);
});


