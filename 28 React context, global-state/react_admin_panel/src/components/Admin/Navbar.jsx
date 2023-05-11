import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useAdminContext } from "../../context/AdminUserContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { admin, adminLocal, setAdmin, setAdminLocal } = useAdminContext();
  function handleLogOut(){
    Swal.fire({
      title: `Log out - ${adminLocal.admin}?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setAdmin(null);
        setAdminLocal(null);
        Swal.fire(
          'Logged Out!',
          'Logged Out Successfully!',
          'success'
        )
      }
    })
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{
          height: "60px",
          background: "rgb(78,45,59)",
          background:
            "linear-gradient(90deg, rgba(78,45,59,1) 0%, rgba(19,64,116,1) 100%)",
        }}
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React App | Admin Panel
          </Typography>
          <Button variant="outlined" style={{ marginRight: "8px" }}>
            <Link style={{ color: "white", textDecoration: "none" }} to="/">
              Main Site
            </Link>
          </Button>
          {adminLocal === null ? (
            <Button variant="outlined" style={{ marginRight: "8px" }}>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/admin/login"
              >
                Login
              </Link>
            </Button>
          ) : (
            <>
              <Button variant="outlined" style={{ marginRight: "8px" }}>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/admin/"
                >
                  Employees
                </Link>
              </Button>
              <Button variant="outlined" style={{ marginRight: "8px" }}>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/admin/add-employee"
                >
                  Add Employee
                </Link>
              </Button>
              <Button  style={{ color: "white"}} variant="outlined" onClick={handleLogOut}>Log Out </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
