import * as yup from 'yup' //we import all the features of the Yup library with the name 'yup'

//we define and export the form's validation rules
export const registrationFormShemas = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email adress is required"),

    age: yup.number().positive("Please enter a positive value").integer("Please enter an integer").required("Age field is required"),

    password: yup.string().required("Password field is required"),

    confirmPassword: yup.string().required("This field is required").oneOf([yup.ref('password', yup.password)] , 'Passwords do not match'),

    term: yup.boolean().required("Please confirm the box")
})