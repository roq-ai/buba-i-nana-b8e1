import * as yup from 'yup';

export const eventValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  date: yup.date().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
