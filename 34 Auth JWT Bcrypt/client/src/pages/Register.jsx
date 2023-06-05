import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useFormik } from 'formik';
import { signUp } from '../api/requests';
import Swal from 'sweetalert2';

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = async(values,actions)=>{
    await signUp({
      username: values.username,
      email: values.email,
      password: values.password,
      isAdmin: false
    });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'User signed up successfully!',
      showConfirmButton: false,
      timer: 1200
    })
    actions.resetForm();
    navigate('/login');
  }
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: handleSubmit
  })
  return (
    <div style={{display:'flex',height:'80vh',width:'100%',justifyContent:'center',alignItems:'center'}}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField onChange={formik.handleChange} onBlur={formik.handleBlur} name="username" value={formik.values.username} type="text" id="outlined-basic" label="Username" variant="outlined" />
          <TextField onChange={formik.handleChange} onBlur={formik.handleBlur} name="email" value={formik.values.email} type="email" id="outlined-basic" label="Email" variant="outlined" />
        </div>
        <div>
          <TextField onChange={formik.handleChange} onBlur={formik.handleBlur} name="password" value={formik.values.password} type="password" id="outlined-basic" label="Password" variant="outlined" />
          <TextField onChange={formik.handleChange} onBlur={formik.handleBlur} name="confirmPassword" value={formik.values.confirmPassword} type="password" id="outlined-basic" label="Confirm Password" variant="outlined" />
        </div>
        <Button type="submit" style={{display:'block',margin:'30px auto'}} variant='contained' color='warning'>Register</Button>
      </form>
    </div>
  )
}

export default Register