const url = 'https://httpbin.org/post'

export default async function sendForm() {

    const modalEl = document.querySelector('.modal');
    const modalMsgEl = document.querySelector('.modal__msg');

    return await fetch(url, { method: 'POST' })

        .then(response => {

            if (response.ok) {

                modalMsgEl.textContent = 'Благодарим за обращение!'
                modalEl.classList.add('modal--active')
                document.body.style.overflow = 'hidden';

            }

        })

        .catch(error => {

            console.error(error)
            modalMsgEl.textContent = 'Не удалось отправить сообщение...'
            modalEl.classList.add('modal--active')

        })

}