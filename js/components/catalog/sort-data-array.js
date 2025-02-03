const catalogSortSelectEl = document.querySelector('.catalog__sort-select')

export default function sortDataArray(array) {
    if (catalogSortSelectEl.value == 'price-min') {
        array.sort((a, b) => a.price.new - b.price.new)
    }

    if (catalogSortSelectEl.value == 'price-max') {
        array.sort((a, b) => b.price.new - a.price.new)
    }

    if (catalogSortSelectEl.value == 'rating-max') {
        array.sort((a, b) => b.rating - a.rating)
    }
}