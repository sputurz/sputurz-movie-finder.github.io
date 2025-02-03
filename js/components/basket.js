import BasketCard from "./basket-card.js";
import getProducts from "../get-products.js";

const headerBasketBtnEl = document.querySelector('.header__user-btn');
const headerBasketCountEl = document.querySelector('.header__user-count');
headerBasketCountEl.textContent = 0
const basketEl = document.querySelector('.basket');
const basketListEl = document.querySelector('.basket__list');
const basketLinkEl = document.querySelector('.basket__link');
const basketEmptyBlockEl = document.querySelector('.basket__empty-block');

export default async function getBasket() {

    if (headerBasketCountEl.textContent != 0) {
        basketEmptyBlockEl.style.display = 'none'
        basketLinkEl.style.display = 'flex'
    }
    else {
        basketEmptyBlockEl.style.display = 'block'
        basketLinkEl.style.display = 'none'
    }

}

export async function addCardToBasket(dataId) {

    headerBasketCountEl.textContent = (Number(headerBasketCountEl.textContent)) + 1

    getBasket()

    const products = await getProducts()

    for (const productData of products.dataArray) {

        if (productData.id == dataId) {
            const basketCardEl = new BasketCard(productData).getComponent()
            basketListEl.append(basketCardEl)
            break
        }

    }

}

headerBasketBtnEl.addEventListener('click', () => {

    basketEl.classList.toggle('basket--active')

});