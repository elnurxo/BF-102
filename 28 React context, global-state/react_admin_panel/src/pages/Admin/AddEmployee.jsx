import { Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { postEmployee } from "../../api/httprequests";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAdminContext } from "../../context/AdminUserContext";

const AddEmployee = () => {
  const [newEmployee, setNewEmployee] = useState({});
  const navigate = useNavigate();
  const { adminLocal } = useAdminContext();
  useEffect(() => {
    if (adminLocal === null) {
      navigate("/admin/login");
    }
  }, [adminLocal, navigate]);
  function handleSubmit(e) {
    e.preventDefault();
    newEmployee.id = uuidv4();
    postEmployee(newEmployee);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${newEmployee.name} added successfully`,
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/admin");
  }
  function handleChange(e) {
    setNewEmployee({ ...newEmployee, [e.target.id]: e.target.value });
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
        <Typography align="center" fontSize={24} fontWeight={700}>
          Add New Employee
        </Typography>
        <TextField
          onChange={(e) => handleChange(e)}
          style={{ marginRight: "15px" }}
          id="name"
          required
          label="Employee Name"
          variant="standard"
        />
        <TextField
          onChange={(e) => handleChange(e)}
          style={{ marginRight: "15px" }}
          id="surname"
          required
          label="Employee Surname"
          variant="standard"
        />
        <TextField
          onChange={(e) => handleChange(e)}
          style={{ marginRight: "15px" }}
          id="position"
          required
          label="Employee Position"
          variant="standard"
        />
        <TextField
          onChange={(e) => handleChange(e)}
          style={{ marginRight: "15px" }}
          id="salary"
          required
          type="number"
          step="any"
          label="Employee Salary"
          variant="standard"
        />
        <TextField
          onChange={(e) => handleChange(e)}
          id="url"
          required
          label="Employee Image"
          variant="standard"
        />
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="submit"
            style={{ marginTop: "30px", width: "20%", margin: "40px auto" }}
            variant="contained"
            color="primary"
          >
            ADD
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
