"use strict"

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// console.log(getRandomInt(1, 6));

const playersQty = 8
let maxDiceOnTable
if (playersQty == 1) {
    maxDiceOnTable = 4
} else {
    maxDiceOnTable = playersQty * 2 + 1
}

const dice = {
    color: null,
    num: null
}

const diceOneColorMount = 18
const diceColors = ['red', 'green', 'blue', 'yellow', 'violet']
let blackBag = []
// наполняем мешок кубиками с разными цветами
for (let i = 0; i < diceOneColorMount; i++) {

    for (let j = 0; j < diceColors.length; j++) {

        blackBag.push(
            {
                color: diceColors[j],
                num: null
            }
        )

    }

}

// условный цикл игры
// первый ход

const tableReserv = []



for (let i = 0; i < maxDiceOnTable; i++) {

    const randomIndex = Math.floor(Math.random() * blackBag.length)
    tableReserv.push(blackBag[randomIndex])
    blackBag.splice(randomIndex, 1)

}



tableReserv.forEach(dice => dice.num = getRandomInt(1, 6));


const tableReserveWrapEl = document.querySelector('.table-reserve__wrap');


tableReserv.forEach(dice => {
    console.log(dice);

    const tableReserveDiceEl = document.createElement('div')
    tableReserveDiceEl.classList.add('table-reserve__dice')
    tableReserveDiceEl.classList.add(`table-reserve__dice-${dice.color}`)

    tableReserveDiceEl.innerHTML = `<svg  class="table-reserve__icon-dice" aria-hidden="true">
            <use xlink:href="images/sprite.svg#icon-dice-${dice.num}"></use>
        </svg>`

    tableReserveWrapEl.append(tableReserveDiceEl)
});

