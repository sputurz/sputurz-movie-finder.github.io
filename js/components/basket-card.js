import getBasket from "./basket.js"
import { getDivEl, getImgEl, getBtnEl, getSpanEl, getSvgEl, getLiEl } from "./base-components.js"

export default class BasketCard {

    _image = "../images/item-no-img.png"
    _name = '#нет названия товара'
    _price =  0

    constructor(productData) {

        if (productData.image) {
            this.image = productData.image
        }

        if (productData.name) {
            this.name = productData.name
        }

        if (productData.price && productData.price.new) {
            this.price = productData.price.new
        }

    }

    getComponent() {
        this.basketCardEl = getLiEl('basket__item')

        this.basketCardImgWrapEl = getDivEl('basket__img')
        this.basketCardImgEl = getImgEl(
            'product-card__img',
            this.image,
            '60',
            '60',
            'Фотография товара',
        )
        
        this.basketCardNameEl = getSpanEl('basket__name', this.name)
        this.basketCardPriceEl = getSpanEl('basket__price', `${this.price} руб`)
        this.basketCardBtnCloseEl = getBtnEl('basket__close')
        this.basketCardBtnCloseIconEl = getSvgEl(
            '24',
            '24',
            true,
            'icon-close'
        )

        this.basketCardImgWrapEl.append(this.basketCardImgEl)
        this.basketCardBtnCloseEl.append(this.basketCardBtnCloseIconEl)

        this.basketCardEl.append(
            this.basketCardImgWrapEl,
            this.basketCardNameEl,
            this.basketCardPriceEl,
            this.basketCardBtnCloseEl
        )

        this.basketCardBtnCloseIconEl.addEventListener('click', () => {

            document
                .querySelector('.header__user-count')
                .textContent = Number(document
                    .querySelector('.header__user-count')
                    .textContent) - 1

            this.basketCardEl.remove()

            getBasket()

        })

        return this.basketCardEl
    }

    set image(value) {
        this._image = value

        if (this.basketCardImgEl) {
            this.basketCardImgEl.src = this.image
        }
    }

    get image() {
        return this._image
    }

    set name(value) {
        this._name = value

        if (this.basketCardNameEl) {
            this.basketCardNameEl.textContent = this.name
        }
    }

    get name() {
        return this._name
    }

    set price(value) {
        this._price = value

        if (this.basketCardPriceEl) {
            this.basketCardPriceEl.textContent =  `${this.price} руб`
        }
    }

    get price() {
        return this._price
    }

} 