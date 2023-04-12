'use strict'

//Unit 49

function loadUserCards(){
    data.forEach((user) => {
        const userFullName = document.createElement('h3');
        const userPhoto = document.createElement('img');
        userFullName.append(`${user.firstName} ${user.lastName}`);
        userPhoto.setAttribute('src', user.avatar);
        userPhoto.classList.add('userPhoto');
        createUserCards(userFullName, userPhoto);
    })
}

function createUserCards(userFullName, userPhoto) {
    const userCard = document.createElement('section');
    userCard.append( userPhoto, userFullName);
    document.body.append(userCard);
}

document.body.addEventListener('onload', loadUserCards());


const toDoList = document.querySelector('.toDoList');
const btn = document.querySelector('.btn');
const input = document.querySelector('input');
const form = document.querySelector('form')


btn.addEventListener('click', () => {
    
    if(input.value !== ''){
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'delete me';
    
        deleteBtn.addEventListener('click', () => {
            li.remove();
            deleteBtn.remove();
        })
    
        li.append(input.value);
        li.append(deleteBtn);
        toDoList.append(li);
        input.value = '';
    }

 
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
})