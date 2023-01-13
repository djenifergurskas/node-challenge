import { body } from "express-validator";

const customerValidator = [

    body('full_name').notEmpty({ignore_whitespace: true}).isString().trim(),
    body('email').isEmail().isString(),
    body('email_confirmation').isEmail().isString(),
    body('cpf').isString(),
    body('cellphone').isString(),
    body('birthdate').notEmpty().trim().toDate().withMessage('Incorrect values'),
    body('email_sms').isBoolean(),
    body('whatsapp').isBoolean(),
    body('country').notEmpty().isString(),
    body('city').notEmpty().isString(),
    body('postal_code').notEmpty().isString(),
    body('address').notEmpty({ignore_whitespace: true}).isString(),
    body('number').isNumeric().notEmpty(),
    
]


export default customerValidator 