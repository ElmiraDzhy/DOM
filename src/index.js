'use strict'

//Unit 49

const arr = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg', 
            'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg', 
            'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg', 
            'https://cdn.pixabay.com/photo/2017/08/01/20/06/city-2567670__480.jpg', 
            'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80',
            'https://img.freepik.com/free-photo/colorful-heart-air-balloon-shape-collection-concept-isolated-color-background-beautiful-heart-ball-event_90220-1047.jpg',
            'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&w=1000&q=80',
            'https://images.unsplash.com/39/F9g2FiPUSyC7IybhyI2p_09.jpg?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'];


const img = document.querySelector('.image');
const attr = document.createAttribute('src');
img.setAttributeNode(attr);


const [btnPrev, btnNext] = document.querySelectorAll('.btns > .btn');


const slider = new Slider(arr);


function updateView(){
    attr.value = slider.currentSlide;
}

updateView();


const createBtnHandler = (direction = 'next') => {
    return function(){
        slider.currentIndex = slider[direction];
        updateView();
    }
}

btnPrev.addEventListener('click', createBtnHandler('prev'));

btnNext.addEventListener('click', createBtnHandler('next'));