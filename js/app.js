//.............global variables.........
//.............STRAT....................
let burger = document.querySelector('#burger');
let secMenuItems = document.querySelectorAll('.menu-item');
let nav = document.getElementsByTagName('nav');
let submitBtn  = document.querySelector('#submit-btn');
//..............END...................

//toggle menulist on small screens
burger.addEventListener('click', (e) => {
    e.preventDefault()
    secMenuItems.forEach((menuItem) => {
        menuItem.classList.toggle('menu-item')
    })
})