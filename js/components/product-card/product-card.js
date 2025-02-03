import { addCardToBasket } from "../basket.js"
import { getDivEl, getImgEl, getLinkEl, getSpanEl, getSvgEl, getH2El } from "../base-components.js"
import Tooltip from "./tooltip.js"

export default class ProductCard {

    _id = '#noId'
    _name = '#нет названия товара'
    _price = {
        new: 0,
        old: 0,
    }
    _image = "../images/item-no-img.png"
    _availability = {
        moscow: 0,
        orenburg: 0,
        saintPetersburg: 0,
    }

    constructor(productData) {
        if (productData.id) {
            this.id = productData.id
        }

        if (productData.name) {
            this.name = productData.name
        }

        if (productData.price) {
            if (productData.price.old) {
                this.price.old = productData.price.old
            }

            if (productData.price.new) {
                this.price.new = productData.price.new
            }
        }

        if (productData.image) {
            this.image = productData.image
        }

        if (productData.availability) {
            if (productData.availability.moscow) {
                this.availability.moscow = productData.availability.moscow
            }

            if (productData.availability.orenburg) {
                this.availability.orenburg = productData.availability.orenburg
            }

            if (productData.availability.saintPetersburg) {
                this.availability.saintPetersburg = productData.availability.saintPetersburg
            }
        }
    }

    getComponent() {

        this.productCardEl = getDivEl('product-card')

        this.productCardVisualEl = getDivEl('product-card__visual')
        this.productCardImgEl = getImgEl(
            'product-card__img',
            this.image,
            '436',
            '290',
            'Изображение товара',
        )
        this.productCardMoreComp = this.getProductCardMoreComp()

        this.productCardVisualEl.append(this.productCardImgEl, this.productCardMoreComp)

        this.productCardInfoComp = this.getProductCardInfoComp()

        this.productCardEl.append(this.productCardVisualEl, this.productCardInfoComp)

        return this.productCardEl

    }

    getProductCardMoreComp() {

        this.productCardMoreEl = getDivEl('product-card__more')

        this.productCardLinkIconEl = getLinkEl('#', 'product-card__link btn btn--icon')
        this.productCardLinkIconEl.setAttribute('data-id', this.id)


        this.productCardLinkIconEl.addEventListener('click', (event) => {
            event.preventDefault()
            addCardToBasket(this.productCardLinkIconEl.getAttribute('data-id'))
        })

        this.productCardBtnTextEl = getSpanEl('btn__text', 'В корзину')
        this.productCardLinkBtnEl = getLinkEl('#', 'product-card__link btn btn--secondary')
        this.productCardLinkTextEl = getSpanEl('btn__text', 'Подробнее')

        this.productCardLinkIconEl.append(
            this.productCardBtnTextEl,
            getSvgEl(
                '24',
                '24',
                true,
                'icon-basket'
            ))
        this.productCardLinkBtnEl.append(this.productCardLinkTextEl)
        this.productCardMoreEl.append(this.productCardLinkIconEl, this.productCardLinkBtnEl)

        return this.productCardMoreEl

    }

    getProductCardInfoComp() {
        this.productCardInfoEl = getDivEl('product-card__info')

        this.productCardTitle = getH2El('product-card__title', this.name)

        this.productCardOld = getSpanEl('product-card__old')
        this.productCardOldNumber = getSpanEl(
            'product-card__old-number',
            // ставим пробел между тысячами
            new Intl.NumberFormat('ru-RU').format(this.price.old)
        )
        this.productCardOldAdd = getSpanEl('product-card__old-add', ' ₽')
        this.productCardPrice = getSpanEl('product-card__price')
        this.productCardPriceNumber = getSpanEl(
            'product-card__price-number',
            new Intl.NumberFormat('ru-RU').format(this.price.new)
        )
        this.productCardPriceAdd = getSpanEl('product-card__price-add', ' ₽')

        this.productCardTooltip = new Tooltip(this.availability).getComponent()
        this.productCardTooltip.classList.add('product-card__tooltip')

        this.productCardOld.append(this.productCardOldNumber, this.productCardOldAdd)
        this.productCardPrice.append(this.productCardPriceNumber, this.productCardPriceAdd)
        this.productCardInfoEl.append(
            this.productCardTitle,
            this.productCardOld,
            this.productCardPrice,
            this.productCardTooltip
        )

        return this.productCardInfoEl
    }

    set id(value) {
        this._id = value

        if (this.productCardLinkIconEl) {
            this.productCardLinkIconEl.setAttribute('data-id', this.id)
        }

    }

    get id() {
        return this._id
    }

    set name(value) {
        this._name = value

        if (this.productCardTitle) {
            this.productCardTitle.textContent = this.name
        }
    }

    get name() {
        return this._name
    }

    set price(value) {
        this._price = value

        if (this.productCardOldNumber) {
            this.productCardOldNumber.textContent = this.price.old
        }

        if (this.productCardPriceNumber) {
            this.productCardPriceNumber.textContent = this.price.new
        }
    }

    get price() {
        return this._price
    }

    set image(value) {
        this._image = value

        if (this.productCardImgEl) {
            this.productCardImgEl.src = this.image
        }
    }

    get image() {
        return this._image
    }

    set availability(value) {
        this._availability = value
    }

    get availability() {
        return this._availability
    }
} 