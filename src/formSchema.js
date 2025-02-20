import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name is required')
        .min(2, 'name must be at least 2 characters'),
    specialinfo: yup
    .string(),
    cheese: yup.boolean(),
    bacon: yup.boolean(),
    olives: yup.boolean(),
    pepperoni: yup.boolean(),
    size: yup.string(),

})

export default formSchema;