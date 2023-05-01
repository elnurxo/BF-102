import React from 'react';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  console.log("salam");

  return (
    <React.Fragment>
        <Navbar/>
        <div>app js</div>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
