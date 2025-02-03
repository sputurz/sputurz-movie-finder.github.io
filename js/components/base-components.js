// пространство имен
const svgNS = "http://www.w3.org/2000/svg";
const xlinkNS = "http://www.w3.org/1999/xlink";

function setClassNames(element, classNames) {
    if (classNames) {
        classNames.split(' ').forEach(className => {
            element.classList.add(className)
        });
    }
}

function getDivEl(classNames) {
    const divEl = document.createElement('div')
    setClassNames(divEl, classNames)

    return divEl
}

function getUlEl(classNames) {
    const ulEl = document.createElement('ul')
    setClassNames(ulEl, classNames)

    return ulEl
}

function getLiEl(classNames) {
    const liEl = document.createElement('li')
    setClassNames(liEl, classNames)

    return liEl
}

function getImgEl(classNames, src, height, width, alt) {
    const imgEl = document.createElement('img')
    setClassNames(imgEl, classNames)
    imgEl.src = src
    imgEl.height = height
    imgEl.width = width
    imgEl.alt = alt

    return imgEl
}

function getLinkEl(href, classNames) {
    const linkEl = document.createElement('a')
    linkEl.href = href
    setClassNames(linkEl, classNames)

    return linkEl
}

function getSpanEl(classNames, text = '') {
    const spanEl = document.createElement('span')
    spanEl.textContent = text
    setClassNames(spanEl, classNames)

    return spanEl
}

function getSvgEl(width, height, ariaHidden = '', spriteId = '', classNames = '') {
    const svgEl = document.createElementNS(svgNS, 'svg');
    svgEl.setAttribute('width', width)
    svgEl.setAttribute('height', height)

    setClassNames(svgEl, classNames)

    if (ariaHidden) {
        svgEl.ariaHidden = ariaHidden
    }

    if (spriteId) {
        const spritePath = 'images/sprite.svg'
        const useEl = document.createElementNS(svgNS, 'use');
        useEl.setAttributeNS(xlinkNS, 'xlink:href', `${spritePath}#${spriteId}`)
        svgEl.appendChild(useEl)
    }

    return svgEl
}

function getH2El(classNames, text) {
    const h2El = document.createElement('h2')
    h2El.textContent = text
    setClassNames(h2El, classNames)

    return h2El
}

function getBtnEl(classNames, ariaLabel = '', text = '', type = '') {
    const btnEl = document.createElement('button')
    setClassNames(btnEl, classNames)

    if (ariaLabel) {
        btnEl.ariaLabel = ariaLabel
    }

    if (type) {
        btnEl.type = type
    }

    if (text) {
        btnEl.textContent = text
    }

    return btnEl
}

export {
    getDivEl,
    getUlEl,
    getLiEl,
    getImgEl,
    getLinkEl,
    getSpanEl,
    getSvgEl,
    getH2El,
    getBtnEl,
}