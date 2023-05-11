import * as yup from "yup";

export const AdminLoginValidation = yup.object().shape({
    username: yup
      .string()
      .min(4, "name must be at least 4 characters")
      .required("username is required"),
    password: yup
      .string()
      .min(4, "password must be at least 4 chars")
      .required("password is required"),
  });