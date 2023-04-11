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
