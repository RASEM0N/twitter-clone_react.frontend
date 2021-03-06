import * as yup from 'yup'

const registerValidationSchema = yup.object({
    email: yup
        .string()
        .email('Некорректная почта')
        .min(6, 'Почта дожна  быть минимум в длину 4 символов')
        .max(40, 'Почта дожна быть максимум в длину 40 символо')
        .required('Требуется электронная почта'),
    username: yup
        .string()
        .min(4, 'Имя пользователя должен быть минимум в длину 4 символов')
        .max(24, 'Имя пользователя должен быть максимум в длину 40 символо')
        .required('Требуется имя пользователя'),
    fullname: yup
        .string()
        .min(4, 'Полное имя должно быть минимум в длину 4 символов')
        .max(24, 'Полное имя должно максимум в длину 40 символо')
        .required('Требуется полное имя пользователя'),
    password: yup
        .string()
        .min(6, 'Пароль должен быть минимум в длину 8 символов')
        .max(24, 'Пароль должно максимум в длину 40 символо')
        .required('Требуется пароль'),
})

export default registerValidationSchema
