import * as yup from 'yup';

export const friendValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
  friend_id: yup.string().nullable(),
});
