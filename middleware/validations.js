import {body} from 'express-validator'

export const registerValidation = [
    body("email", 'Почта указана неверно').isEmail(),
    body("password", "Пароль должен содержать 3 символа").isLength({min:3}),
]

export const loginValidation = [
    body("email", "Почта указано неверно").isEmail(),
    body("password", "Пароль должен содержать 3 символа").isLength({min:3})
]

export const gameValidation = [
    body("title", "Введите название игры").isString().isLength({min:3}),
    body("description", "Введите описание").isString().isLength({min:10}),
    body("price", "Введите цену").isNumeric(),
    body("category", "Введите категорию").isArray().isLength({min:3}),
    body("image", "Неверная ссылка на картинку").isString().optional(),
    body("content_images", "Неверная ссылка на картинки").isArray().optional(),
    body("release_date", "Неверная дата выхода").isString().optional(),
]