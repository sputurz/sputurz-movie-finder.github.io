const catalogFormEl = document.querySelector('.catalog-form')
const inputEls = catalogFormEl.querySelectorAll('input')

export async function getAvailabilityCount(products) {
    const availabilityCountObj = await getAvailabilityCountData(products)

    inputEls.forEach(input => {

        if (input.type == 'checkbox' && Object.keys(availabilityCountObj).includes(input.value)) {

            input
                .parentElement
                .querySelector('.custom-checkbox__count')
                .textContent = availabilityCountObj[input.value]

        }

    });

}

async function getAvailabilityCountData(products) {

    const productsTypesCountObj = {}
 
    inputEls.forEach(input => {

        if (input.type == 'checkbox') {
            productsTypesCountObj[input.value] = 0
        }

    });

    products.dataArray.forEach(productData => {

        productData.type.forEach(type => {

            if (Object.keys(productsTypesCountObj).includes(type)) {
                productsTypesCountObj[type]++
            }

        });

    });

    return productsTypesCountObj
}