import { getDivEl, getBtnEl, getSvgEl, getSpanEl, getUlEl, getLiEl } from "../base-components.js"

export default class Tooltip {

    constructor(availability) {
        this.availability = availability
    }

    getComponent() {
        this.tooltipEl = getDivEl('tooltip')
        this.tooltipBtn = getBtnEl('tooltip__btn', 'Показать подсказку')
        this.tooltipIcon = getSvgEl(
            '5',
            '10',
            true,
            'icon-i'
        )

        this.tooltipContentComp = this.getTooltipContentComp()

        this.tooltipBtn.append(this.tooltipIcon)
        this.tooltipEl.append(this.tooltipBtn, this.tooltipContentComp)

        this.tooltipBtn.addEventListener('mouseover', (event) => {
            if (event.target == this.tooltipBtn && !event.target._tippy) {
                tippy(this.tooltipBtn, {
                    content: this.tooltipContentComp.innerHTML,
                    allowHTML: true,
                });
            }
        });

        return this.tooltipEl
    }

    getTooltipContentComp() {
        this.tooltipContentEl = getDivEl('tooltip__content')
        this.tooltipTextEl = getSpanEl('tooltip__text', 'Наличие товара по городам:')
        this.tooltipListEl = getUlEl('tooltip__list')

        this.availabilityCities = ['Москва: ', 'Оренбург: ', 'Санкт-Петербург: ']

        for (let index = 0; index < this.availabilityCities.length; index++) {

            this.tooltipItemEl = getLiEl('tooltip__item')
            this.tooltipItemTextEl = getSpanEl('tooltip__text', this.availabilityCities[index])
            this.tooltipCountEl = getSpanEl('tooltip__count', Object.values(this.availability)[index])

            this.tooltipListEl.append(this.tooltipItemEl)
            this.tooltipItemEl.append(this.tooltipItemTextEl)
            this.tooltipItemTextEl.append(this.tooltipCountEl)
        }

        this.tooltipContentEl.append(this.tooltipTextEl, this.tooltipListEl)

        return this.tooltipContentEl
    }
} 