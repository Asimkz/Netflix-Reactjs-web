// index.js
import * as Yup from "yup";

export const SighnInSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter the name"),
  password: Yup.string().min(2).max(25).required("Enter the password"),
});

export const SignUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter the name"),
  email: Yup.string()
    .email()
    .min(2)
    .max(25)
    .required("please enter valid email"),
  password: Yup.string().min(8).max(25).required("Enter the password"),
  confirm_password: Yup.string(8)
    .required("Enter the same password")
    .oneOf([Yup.ref("password"), null], "Password must be same"),
});
