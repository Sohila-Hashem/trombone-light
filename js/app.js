const burger = document.querySelector('.burger');
const navLinksContainer = document.querySelector('.nav-links-container');
const linksContainer = document.querySelector('.links-container') ;
const barOne = document.querySelector('.bar-1');
const barTwo = document.querySelector('.bar-2');
const barThree = document.querySelector('.bar-3');
const navbar = document.querySelector('.navbar-container');


document.addEventListener('scroll', (e) => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgb(0,0,0)'
    } else {
        navbar.style.backgroundColor = ''
    }
})

burger.addEventListener('click', (e) => {
    barTwo.classList.toggle('bar-2-animate')
    barOne.classList.toggle('bar-1-animate')
    barThree.classList.toggle('bar-3-animate')
    let navLinksContainerHeight = navLinksContainer.getBoundingClientRect().height
    let linksContainerHeight = linksContainer.getBoundingClientRect().height
    if (navLinksContainerHeight === 0) {
        navLinksContainer.style.height = `${linksContainerHeight}px`
    } else {
        navLinksContainer.style.height = '0px'
    }
})