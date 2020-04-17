import * as yup from 'yup'
import {
  emailNotLongEnough,
  passwordNotLongEnough,
  invalidEmail,
} from './errorMessages'

export const registerPasswordValidation = yup
  .string()
  .min(6, passwordNotLongEnough)
  .max(255)
  .required('Required')

export const registerValidationScheme = yup.object().shape({
  email: yup
    .string()
    .email(invalidEmail)
    .min(3, emailNotLongEnough)
    .max(255)
    .required('Required'),
  password: registerPasswordValidation,
})
