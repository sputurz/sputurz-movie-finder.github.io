import { getProductsList, clearProductList } from "./catalog-list.js";
import { getAvailabilityCount } from "./catalog-form.js";
import getProducts from "../../get-products.js"

const catalogSortSelectEl = document.querySelector('.catalog__sort-select')
const catalogFormEl = document.querySelector('.catalog-form')
const catalogFormResetEl = document.querySelector('.catalog-form__reset')

async function getCatalog(products) {

    getProductsList(products)
    getAvailabilityCount(products)

}

async function updateCatalog(pageNumber = 1) {

    const products = await getProducts()
    clearProductList()
    getProductsList(products, pageNumber)

}

catalogSortSelectEl.addEventListener('change', () => { updateCatalog() });

catalogFormEl.addEventListener('change', () => { updateCatalog() });

catalogFormResetEl.addEventListener('click', () => { updateCatalog() });

export {
    getCatalog,
    updateCatalog
}