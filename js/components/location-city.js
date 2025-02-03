const locationCityEl = document.querySelector('.location__city')
const locationSublistEl = document.querySelector('.location__sublist')

export default function getLocationCity() {

    locationCityEl.addEventListener('click', () => {

        locationCityEl.classList.toggle('location__city--active')

    })

    locationSublistEl.addEventListener('click', (event) => {

        if (event.target.closest('.location__sublink')) {
            locationCityEl.textContent = event.target.textContent
            locationCityEl.classList.remove('location__city--active')
        }
        
    })
}