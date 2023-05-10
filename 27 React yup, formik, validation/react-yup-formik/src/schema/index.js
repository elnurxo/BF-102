import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
//min 5 chars, 1 uppercase letter, 1 lowercase letter, 1 numeric digit

export const BasicFormValidation = yup.object().shape({
  name: yup
    .string()
    .min(3, "name must be at least 3 characters")
    .required("name is required"),
  age: yup
    .number()
    .positive("age cannot be negative number")
    .integer()
    .required("age is required"),
  email: yup
    .string()
    .email("email is not valid")
    .required("email is required"),
  password: yup
    .string()
    .matches(passwordRules, { message: "password is not strong enough!" })
    .min(5, "password must be at least 5 chars")
    .required("password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password doesn't match")
    .required("confirm password is required"),
  isMarried: yup.boolean().oneOf([true],"evli olmalisan").required("required")
});
