const faqWrapperEl = document.querySelector('.faq__wrapper');
const accordionBtnsEl = faqWrapperEl.querySelectorAll('.accordion__btn');

faqWrapperEl.addEventListener('click', (event) => {
    
    accordionBtnsEl.forEach(btn => {

        if (btn == event.target) {
            btn.classList.toggle('accordion__btn--active')
        }
        else {
            btn.classList.remove('accordion__btn--active')
        }

    });

})