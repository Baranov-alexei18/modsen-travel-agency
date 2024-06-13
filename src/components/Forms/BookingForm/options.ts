import * as Yup from 'yup';

export const initialValues = {
  phone: '',
  fullName: '',
  country: '',
  countUser: '',
  typeRoom: '',
  checkIn: '',
  checkOut: '',
};

export const validationSchema = Yup.object({
  fullName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .min(3, 'Must be 3 characters or more')
    .required('Required'),
  phone: Yup.string()
    .required('Required'),
  country: Yup.string()
    .required('Required'),
  countUser: Yup.string()
    .required('Required'),
  typeRoom: Yup.string()
    .required('Required'),
  checkIn: Yup.string()
    .required('Required'),
  checkOut: Yup.string()
    .required('Required'),
});
