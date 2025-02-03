import ProductCard from "../product-card/product-card.js"
import { getLiEl } from "../base-components.js"
import { getPaginatedDataArray, getCatalogPaginationPagesEls } from "./catalog-pagination.js";

const productListEl = document.querySelector('.catalog__list');


async function getProductsList(productsObj, pageNumber = 1) {

    const products = { ...productsObj }
    products.sortDataArray()
    products.filterDataArray()

    getCatalogPaginationPagesEls(products)
    const paginatedDataArray = getPaginatedDataArray(products, pageNumber)

    paginatedDataArray.forEach(productData => {
        const productCardEl = new ProductCard(productData).getComponent()
        const productItemEl = getLiEl('catalog__item')
        productItemEl.append(productCardEl)
        productListEl.append(productItemEl)
    });

}

function clearProductList() {
    if (productListEl) {
        productListEl.innerHTML = ''
    }
}

export {
    getProductsList,
    clearProductList
}