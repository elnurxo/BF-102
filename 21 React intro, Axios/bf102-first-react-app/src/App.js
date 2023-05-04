import React from 'react';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Button } from "@mui/material"
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';


function App() {
  console.log("salam");

  return (
    <React.Fragment>
        <Navbar/>
        <Button variant='contained' color='error'>
        <AccessibleForwardIcon/>
          Test Button</Button>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
