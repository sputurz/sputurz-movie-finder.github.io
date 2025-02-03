import getModal from "./components/modal.js"
import {getCatalog} from "./components/catalog/catalog.js";
import getDayProductsList from "./components/slider/slider.js";
import getMainMenu from "./components/main-menu.js";
import getLocationCity from "./components/location-city.js";
import getBasket from "./components/basket.js";

import * as questionsForm from "./components/questions-form/questions-form.js"
import * as faqWrapper from "./components/faq-wrapper.js"

import getProducts from "./get-products.js"



export default async function render() {

    const products = await getProducts()

    getModal()
    getCatalog(products)
    getDayProductsList(products)
    getMainMenu()
    getLocationCity()
    getBasket()

}