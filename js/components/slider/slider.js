import { getLiEl } from "../base-components.js";
import ProductCard from "../product-card/product-card.js";

const dayProductsListEl = document.querySelector('.day-products__list ');

export default async function getSlider(productsObj) {

    const products = { ...productsObj }
    products.filterGoodsOfDay()

    products.dataArray.forEach(productData => {
        const dayProductCardEl = new ProductCard(productData).getComponent()
        dayProductCardEl.classList.add('product-card--small')
        const dayProductItemEl = getLiEl('day-products__item swiper-slide')
        dayProductItemEl.append(dayProductCardEl)
        dayProductsListEl.append(dayProductItemEl)
    })

    const swiperModule = await import("./init-swiper.js")
    swiperModule.default()

}