import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useBasketContext } from '../../context/BasketContext';

const Navbar = () => {
  const{basket} = useBasketContext();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  style={{'height':'60px','background':'rgb(149,159,105)','background':'linear-gradient(90deg, rgba(149,159,105,1) 0%, rgba(126,144,116,1) 30%, rgba(110,88,33,1) 61%, rgba(25,73,133,1) 82%, rgba(5,46,56,1) 100%)'}} position="static">
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
            React App | routing,json-server
          </Typography>
          <Button variant='outlined' style={{'marginRight':'8px'}}><Link style={{color:'white','textDecoration':'none'}} to='/'>Home</Link></Button>
          <Button variant='outlined' style={{'marginRight':'8px'}}><Link style={{color:'white','textDecoration':'none'}} to='/employees'>Employees</Link></Button>
          <Button variant='outlined' style={{'marginRight':'8px'}}><Link style={{color:'white','textDecoration':'none'}} to='/admin'>Admin Panel</Link></Button>
          <Button variant='outlined'><Link style={{color:'white','textDecoration':'none'}} to='/basket'>Basket <sup style={{fontWeight:'bold',color:'red'}}>{basket.length}</sup></Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar