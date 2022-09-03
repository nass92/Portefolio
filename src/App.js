import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import "./App.css"
import NavBar from './Components/Navbar';
import Valise from './Pages/Valise';
import Valise1 from './Components/valise/Valise1';
import Valise2 from './Components/valise/Valise2';
import Education from './Pages/Education';
import Contact from './Pages/Contact';
import Back from './Components/class/background';
import Project from './Pages/Project';
function App() {
 
  return (<>
 
  <div class="fixed-top">
<NavBar/>
        </div>
        

      


    <Routes>
      
      <Route exact path="/" element={<Home/>}></Route>
      <Route  path="/valise" element={<Valise/>}></Route>
      <Route  path="/valise1" element={<Valise1/>}></Route>
      <Route  path="/valise2" element={<Valise2/>}></Route>
      <Route  path="/education" element={<Education/>}></Route>
      <Route  path="/project" element={<Project/>}></Route>
      <Route  path="/Contact" element={<Contact/>}></Route>
    </Routes>

 
<Back></Back>

   
  </>

  );
}

export default App;
