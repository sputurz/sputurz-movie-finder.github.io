import { getDivEl, getSpanEl, getBtnEl } from "./base-components.js"

export default function getModal() {

    document.body.append(getModalEl())

}

function getModalEl() {

    const modalEl = getDivEl('modal')
    const modalWrapEl = getDivEl('modal__wrapper')
    const modalContentEl = getDivEl('modal__content')
    const modalMsgEl = getSpanEl('modal__msg', '')
    const modalBtnCloseEl = getBtnEl('modal__btn-close', 'Закрыть окно', 'x')

    modalContentEl.append(modalMsgEl, modalBtnCloseEl)
    modalWrapEl.append(modalContentEl)
    modalEl.append(modalWrapEl)

    modalBtnCloseEl.addEventListener('click', () => {
        modalEl.classList.remove('modal--active')
        document.body.style.overflow = '';
    })

    return modalEl
}