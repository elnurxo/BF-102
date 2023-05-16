import * as yup from "yup";

export const ArtistValidation = yup.object().shape({
  name: yup.string().required("name is required"),
  age: yup
    .number()
    .integer("age must be an integer")
    .positive("age cannot be negative number")
    .required("age is required"),
  imageURL: yup
    .string()
    .required("image is required"),
});
