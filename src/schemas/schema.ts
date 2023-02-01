import * as Yup from 'yup'

export const schemaLogin = Yup.object().shape({
    username: Yup.string().min(5, 'Username must be at least 5 character').required('Required'),
    password: Yup.string().required('Required').min(4)
})

export const schemaRegister = Yup.object().shape({
    username: Yup.string().min(5, 'Username must be at least 5 character').required('Required'),
    email: Yup.string().email("Please enter a valid email").required('Required'),
    password: Yup.string().required('Required').min(4)
})