import { Button, TextField } from "@mui/material";
import { Typography } from "antd";
import { useFormik } from "formik";
import { AdminLoginValidation } from "../../validation";
import React from "react";
import { useAdminContext } from "../../context/AdminUserContext";
import { getAllUsers } from "../../api/httprequests";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useLocalStorage from "../../hooks/useLocalStorage";

const AdminLogin = () => {
  const { setAdmin, adminLocal, setAdminLocal } = useAdminContext();

  const navigate = useNavigate();
  //form submit function
  const handleSubmit = async (values, actions) => {
    getAllUsers().then((res) => {
      let found = res.find(res=>res.username === values.username && res.password === values.password && res.isAdmin);
      if (found===undefined) {
        setAdmin(null);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: `Wrong username or password!`,
          showConfirmButton: false,
          timer: 1500
        })
      }
      else{
        //log in
        setAdminLocal({admin:found.username});
        setAdmin(found);
        console.log(found);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Welcome Back ${found.fullname}!`,
          showConfirmButton: false,
          timer: 1500
        })
        navigate("/admin");
      }
    });
    actions.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: handleSubmit,
    validationSchema: AdminLoginValidation,
  });
  return (
    <div
      style={{
        height: "90vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Typography
          align="center"
          style={{ fontSize: "24px", fontWeight: "500", marginBottom: "14px" }}
        >
          Admin Login
        </Typography>
        <TextField
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.username}
          name="username"
          id="outlined-basic"
          style={{ marginRight: "10px" }}
          label="Admin User Name"
          type="text"
          variant="outlined"
        />
        {formik.errors.username && formik.touched.username && (
          <p style={{ color: "red" }}>{formik.errors.username}</p>
        )}
        <TextField
          id="outlined-basic"
          label="Admin Password"
          type="password"
          variant="outlined"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          name="password"
        />
        {formik.errors.password && formik.touched.password && (
          <p style={{ color: "red" }}>{formik.errors.password}</p>
        )}
        <br />
        <Button
          style={{ display: "block", margin: "25px auto" }}
          variant="contained"
          color="primary"
          type="submit"
          disabled={
            formik.isSubmitting || Object.keys(formik.errors).length > 0
          }
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default AdminLogin;
