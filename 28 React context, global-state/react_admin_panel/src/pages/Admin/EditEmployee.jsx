import { Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeByID, putEmployeeByID } from "../../api/httprequests";
import Swal from "sweetalert2";
import { useAdminContext } from "../../context/AdminUserContext";

const EditEmployee = () => {
  const{adminLocal} = useAdminContext();
  const navigate = useNavigate();
  useEffect(()=>{
    if (adminLocal===null) {
      navigate('/admin/login');
    }
   },[adminLocal,navigate]);
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getEmployeeByID(id).then((res) => {
      setEmployee(res);
    });
  }, [id]);
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("updated employee: ", employee);
    putEmployeeByID(id, employee);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${employee.name} updated successfully`,
      showConfirmButton: false,
      timer: 1500
    })
    navigate("/admin");
  }
  function handleChange(e) {
    setEmployee({ ...employee, [e.target.id]: e.target.value });
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        width: "100%",
      }}
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <img
          style={{
            display: "block",
            margin: "0 auto",
            objectFit: "cover",
            objectPosition: "top center",
            borderRadius: "10px",
          }}
          width={150}
          height={150}
          src={employee.url}
          alt={employee.name}
        />
        <Typography
          align="center"
          fontSize={24}
          fontWeight={700}
          marginBottom={7}
        >
          Edit Employee
        </Typography>
        <TextField
          onChange={(e) => handleChange(e)}
          InputLabelProps={{ shrink: true }}
          style={{ marginRight: "15px" }}
          id="name"
          required
          label="Employee Name"
          variant="standard"
          value={employee.name}
        />
        <TextField
          onChange={(e) => handleChange(e)}
          style={{ marginRight: "15px" }}
          id="surname"
          required
          label="Employee Surname"
          variant="standard"
          InputLabelProps={{ shrink: true }}
          value={employee.surname}
        />
        <TextField
          onChange={(e) => handleChange(e)}
          style={{ marginRight: "15px" }}
          id="position"
          required
          label="Employee Position"
          InputLabelProps={{ shrink: true }}
          variant="standard"
          value={employee.position}
        />
        <TextField
          onChange={(e) => handleChange(e)}
          style={{ marginRight: "15px" }}
          id="salary"
          required
          type="number"
          step="any"
          label="Employee Salary"
          InputLabelProps={{ shrink: true }}
          variant="standard"
          value={employee.salary}
        />
        <TextField
          onChange={(e) => handleChange(e)}
          id="url"
          required
          label="Employee Image"
          InputLabelProps={{ shrink: true }}
          variant="standard"
          value={employee.url}
        />
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="submit"
            style={{ marginTop: "30px", width: "20%", margin: "40px auto" }}
            variant="contained"
            color="success"
          >
            EDIT
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
