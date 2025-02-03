import { questionsFormValidator } from "./questions-form-validator.js"
import sendForm from "./send-form.js"

const questionsFormEl = document.querySelector('.questions__form');

questionsFormEl.addEventListener('submit', (event) => {
    questionsFormValidator.onSuccess(function () {

        event.preventDefault()

        sendForm()

    })
})

