'use strict'

const btn = document.querySelector('.btn');
const menu = document.querySelector('.menu');

const closeBtn = document.querySelector('.close-btn');

btn.addEventListener('click', ()=> menu.style.left = '0px');

closeBtn.addEventListener('click', ()=> menu.style.left = '-300px')