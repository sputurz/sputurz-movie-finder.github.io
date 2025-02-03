import { getBtnEl, getLiEl } from "../base-components.js";
import { updateCatalog } from "./catalog.js";

const cardsPerPage = 6
const catalogPaginationEl = document.querySelector('.catalog__pagination');
const h1TitleEl = document.querySelector('.catalog__title');

function getCatalogPaginationPagesEls(products) {

    catalogPaginationEl.innerHTML = ''

    const pagesCount = Math.ceil(products.dataArray.length / cardsPerPage)

    if (pagesCount > 1) {
        for (let pageNumber = 1; pageNumber <= pagesCount; pageNumber++) {
            const catalogPaginationItemEl = getLiEl('catalog__pagination-item')
            const catalogPaginationLinkEl = getBtnEl('catalog__pagination-link', '', pageNumber)
            catalogPaginationItemEl.append(catalogPaginationLinkEl)
            catalogPaginationEl.append(catalogPaginationItemEl)
        }
    }

}

catalogPaginationEl.addEventListener('click', (event) => {

    if (event.target.closest('.catalog__pagination-link')) {

        updateCatalog(Number(event.target.textContent))
        h1TitleEl.scrollIntoView()
        
    }

});

function getPaginatedDataArray(products, pageNumber) {

    const arrayFirstEl = cardsPerPage * pageNumber - cardsPerPage
    const arrayLastEl = arrayFirstEl + cardsPerPage

    return products.dataArray.slice(arrayFirstEl, arrayLastEl)
}


export {
    getCatalogPaginationPagesEls,
    getPaginatedDataArray
}