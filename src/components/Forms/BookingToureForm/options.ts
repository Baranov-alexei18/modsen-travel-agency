import * as Yup from 'yup';

export const initialValues = {
  phone: '',
  fullName: '',
  email: '',
};

export const validationSchema = Yup.object({
  fullName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .min(3, 'Must be 3 characters or more')
    .required('Required'),
  phone: Yup.string()
    .required('Required'),
  email: Yup.string()
    .required('Required'),
});
