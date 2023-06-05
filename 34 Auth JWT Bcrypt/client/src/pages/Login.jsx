import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { signIn } from "../api/requests";
import Swal from "sweetalert2";
import { useUserContext } from "../context/UserContext";

const Login = () => {
  const [user, setUser] = useUserContext();
  const navigate = useNavigate();
  const handleSubmit = async (values, actions) => {
    const response = await signIn({
      username: values.username,
      password: values.password,
    });
    if (response.auth) {
      localStorage.setItem('token',response.token);
      localStorage.setItem('user',JSON.stringify(response.user));
      setUser(response.user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User signed in successfully!",
        showConfirmButton: false,
        timer: 1200,
      });
      actions.resetForm();
      navigate("/users");
    }
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: handleSubmit,
  });
  return (
    <div
      style={{
        display: "flex",
        height: "80vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="username"
            value={formik.values.username}
            type="text"
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="password"
            value={formik.values.password}
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
        </div>
        <Button
          type="submit"
          style={{ display: "block", margin: "30px auto" }}
          variant="contained"
          color="warning"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
