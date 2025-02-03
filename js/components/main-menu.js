
const mainMenuEl = document.querySelector('.main-menu')
const burgerOpenBtn = document.querySelector('.header__catalog-btn')
const burgerCloseBtn = document.querySelector('.main-menu__close')

export default function getMainMenu() {

    burgerOpenBtn.addEventListener('click', () => {
        mainMenuEl.classList.add('main-menu--active')
    })

    burgerCloseBtn.addEventListener('click', () => {
        mainMenuEl.classList.remove('main-menu--active')
    })

}