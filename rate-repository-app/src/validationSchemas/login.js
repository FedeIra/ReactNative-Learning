import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email.')
    .required('Email is required.')
    .matches(/^[^\.]+@[^\.]+\..+$/, 'Invalid email.'),
  password: yup
    .string()
    .min(5, 'Password too short. Min. 5 characters.')
    .max(100, 'Password too long.')
    .required('Password is required.'),
});
