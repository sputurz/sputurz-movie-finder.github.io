const catalogForm = document.querySelector('.catalog-form')

export default function filterDataArray(array) {

    array = filterDataType(array)
    array = filterDataAvailability(array)

    return array
}

function filterDataType(array) {
    const filterQueryArray = []
    const inputEls = catalogForm.querySelectorAll('input')

    inputEls.forEach(input => {

        if (input.type == 'checkbox' && input.checked) {
            filterQueryArray.push(input.id)
        }

    });

    if (filterQueryArray.length) {
        array = array.filter(
            (productData) => {

                let filterState = false

                filterQueryArray.forEach(element => {
                    if (productData.type.includes(element)) {
                        return filterState = true
                    }

                });

                return filterState
            })
    }

    return array
}

function filterDataAvailability(array) {

    const instockRadioEl = catalogForm.querySelector('#instock')

    if (instockRadioEl.checked) {
        array = array.filter(
            (productData) => {
                if (Math.max(...Object.values(productData.availability))) return true
            })
    }

    return array
}