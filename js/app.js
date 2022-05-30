const burger = document.querySelector('#burger');
const navBtnsContainer = document.getElementById('nav-btn-container');
const barOne = document.querySelector('.bar-1')
const barTwo = document.querySelector('.bar-2')
const barThree = document.querySelector('.bar-3')
const navbar = document.querySelector('#navbar-container')
//toggle menulist on small screens

document.addEventListener('scroll', (e) => {
    if (window.scrollY > 168) {
        navbar.style.backgroundColor = 'rgba(0 , 0 , 0, 0.7)'
    } else {
        navbar.style.backgroundColor = ''
    }
})


burger.addEventListener('click', (e) => {
    barTwo.classList.toggle('bar-2-animate')
    barOne.classList.toggle('bar-1-animate')
    barThree.classList.toggle('bar-3-animate')
    if (navBtnsContainer.className === 'nav-btn-container-show') {
        navBtnsContainer.classList.remove('nav-btn-container-show')
        navBtnsContainer.classList.add('nav-btn-container-hide')
    } else if (navBtnsContainer.className === 'nav-btn-container-hide') {
        navBtnsContainer.classList.remove('nav-btn-container-hide')
        navBtnsContainer.classList.add('nav-btn-container-show')
    } else {
        navBtnsContainer.classList.add('nav-btn-container-show')
    }
})