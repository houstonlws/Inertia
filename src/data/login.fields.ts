import * as yup from 'yup';
import { Field } from '../types';

export const loginFormFields: Field[] = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email Address',
    rules: yup
      .string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        'Must enter valid email'
      )
      .required('Email is required'),
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    rules: yup.string().required('Password is required'),
  },
];
