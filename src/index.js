'use strict'

//Events

const btn = document.querySelectorAll('.btn');
btn.forEach((button) => button.addEventListener('click', (e)=> e.target.remove()));