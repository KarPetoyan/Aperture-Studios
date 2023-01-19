//BurgerMenu
const burger = document.querySelector(".burger")
const burgerLine1 = document.querySelector(".burger_line1")
const burgerLine2 = document.querySelector(".burger_line2")
const burgerLine3 = document.querySelector(".burger_line3")
const burgerMenu = document.querySelector(".burger_menu")

burger.addEventListener("click",()=> {
    burgerLine1.classList.toggle("burger_line1-js")
    burgerLine2.classList.toggle("burger_line2-js")
    burgerLine3.classList.toggle("burger_line3-js")
    burgerMenu.classList.toggle("burger_menu-js")
})