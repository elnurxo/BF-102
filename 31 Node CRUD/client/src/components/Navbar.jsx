import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              NODE+REACT APP
            </Typography>
            <Button style={{marginRight:'10px'}} variant="outlined" color="error"><Link style={{textDecoration:'none',color:'white'}} to='/'>Home</Link></Button>
            <Button style={{marginRight:'10px'}} variant="outlined" color="error"><Link style={{textDecoration:'none',color:'white'}} to='/artists'>Artists</Link></Button>
            <Button variant="outlined" color="error"><Link style={{textDecoration:'none',color:'white'}} to='/add-artist'>Add Artist</Link></Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
