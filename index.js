
burger = document.querySelector('.burger')
nav = document.querySelector('.nav')
nav_left  = document.querySelector('.nav_left')
nav_right = document.querySelector('.nav_right')

burger.addEventListener('click', ()=>{

    nav_right.classList.toggle('v-nav-resp');
    nav_left.classList.toggle('v-nav-resp');
    nav.classList.toggle('h-nav-resp');
    
})
