import * as Yup from 'yup';


export default Yup.object().shape({

    name: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),
    city: Yup.string()
        .min(5, 'Too Short!')
        .required('Required'),
    dateBirth: Yup.date()
        .max(new Date())
        .required('Required'),
    rating: Yup.number()
        .required('Required')
        .positive().integer(),
    email: Yup.string().email('Invalid email').required('Required'),
});

