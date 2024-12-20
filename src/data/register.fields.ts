import * as yup from 'yup';
import { Field } from '../types';

export const registerFormFields: Field[] = [
  {
    name: 'displayName',
    placeholder: 'Username',
    rules: yup.string().required('Name is required'),
  },
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
    rules: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  },
  {
    name: 'password2',
    type: 'password',
    placeholder: 'Confirm Password',
    rules: yup
      .string()
      .required('Must confirm password')
      .oneOf([yup.ref('password')], 'Passwords must match'),
  },
];
