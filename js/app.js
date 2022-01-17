//.............global variables.........
//.............STRAT....................
let burger = document.querySelector('#burger');
let secMenuItems = document.querySelectorAll('.menu-item');
let nav = document.getElementsByTagName('nav');
//..............END...................

//toggle menulist on small screens
burger.addEventListener('click', (e) => {
    e.preventDefault()
    secMenuItems.forEach((menuItem) => {
        menuItem.classList.toggle('menu-item')
    })
})