import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  loginEmail: yup
    .string()
    .email('Correo no válido')
    .required('El correo es obligatorio'),
  loginPassword: yup.string().required('La contraseña es obligatoria'),
});




