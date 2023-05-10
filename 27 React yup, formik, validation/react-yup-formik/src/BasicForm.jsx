import { useFormik } from "formik";
import { BasicFormValidation } from "./schema";
import { v4 as uuidv4 } from 'uuid';
import "./form.css";

const BasicForm = () => {
  //form submit function
  const handleSubmit = async(values, actions) => {
    values.id = uuidv4();
    console.log(values);
    // await axios.post("random_url",values);
    actions.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      email: "",
      password: "",
      confirmPassword: "",
      isMarried: false
    },
    onSubmit: handleSubmit,
    validationSchema: BasicFormValidation,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        className={
          formik.errors.name && formik.touched.name ? "input-error" : ""
        }
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.name}
        name="name"
        placeholder="Enter Name"
        type="text"
      />
      {formik.errors.name && formik.touched.name && (
        <p style={{ color: "red" }}>{formik.errors.name}</p>
      )}
      <input
        className={formik.errors.age && formik.touched.age ? "input-error" : ""}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.age}
        name="age"
        placeholder="Enter Age"
        type="number"
      />
      {formik.errors.age && formik.touched.age && (
        <p style={{ color: "red" }}>{formik.errors.age}</p>
      )}
      <input
        className={
          formik.errors.email && formik.touched.email ? "input-error" : ""
        }
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}
        name="email"
        placeholder="Enter Email"
        type="email"
      />
      {formik.errors.email && formik.touched.email && (
        <p style={{ color: "red" }}>{formik.errors.email}</p>
      )}
      <input
        className={
          formik.errors.password && formik.touched.password ? "input-error" : ""
        }
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.password}
        name="password"
        placeholder="Enter Password"
        type="password"
      />
      {formik.errors.password && formik.touched.password && (
        <p style={{ color: "red" }}>{formik.errors.password}</p>
      )}
      <input
        className={
          formik.errors.confirmPassword && formik.touched.confirmPassword
            ? "input-error"
            : ""
        }
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
        name="confirmPassword"
        placeholder="Confirm Password"
        type="password"
      />
      <label htmlFor="isMarried">Is Married? </label>
      <input
        className={
          formik.errors.isMarried && formik.touched.isMarried ? "input-error" : ""
        }
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.isMarried}
        name="isMarried"
        id="isMarried"
        type="checkbox"
      />
      {formik.errors.isMarried && formik.touched.isMarried && (
        <p style={{ color: "red" }}>{formik.errors.isMarried}</p>
      )}
     <button disabled={formik.isSubmitting || Object.keys(formik.errors).length>0} type="submit">Submit Form</button>
    </form>
  );
};

export default BasicForm;
