export const questionsFormValidator = new JustValidate('.questions__form')

questionsFormValidator

    .addField('#name', [
        {
            rule: 'required',
            errorMessage: 'Введите Ваше имя',
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Минимальная длина три символа',
        },
        {
            rule: 'maxLength',
            value: 20,
            errorMessage: 'Максимальная длина двадцать символов',
        },
    ])

    .addField('#email', [
        {
            rule: 'required',
            errorMessage: 'Введите вашу почту'
        },
        {
            rule: 'email',
            errorMessage: 'Почта введена неверно'
        },
    ])

    .addField('#agree', [
        {
            rule: 'required',
            errorMessage: 'Согласие обязательно'
        }
    ])