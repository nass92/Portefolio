import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import "./App.css"
import NavBar from './Components/Navbar';
import Valise from './Pages/Valise';
import ButtonsBottom from './Components/ButtonBottom';
import { motion } from "framer-motion";
function App() {
 
  return (<>
  <div class="fixed-top">
<NavBar/>
        </div>
<main> 
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route  path="/valise" element={<Valise/>}></Route>
    </Routes>
    <div className="fixed-bottom">
    <ButtonsBottom left="/" right={"/"} />
    </div>
   
    </main>
    
  </>

  );
}

export default App;
