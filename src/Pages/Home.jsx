import {DesktopRoot } from"../Styles/Pages/Deskroot"
import { Center, Heading} from '@chakra-ui/react';
import '../Styles/Pages/Home.css'
import NavBar from "../Components/Navbar";
import GridTemplate from "../Components/Welcom";
import { motion } from "framer-motion";
import ButtonsBottom from "../Components/ButtonBottom";
import Valise from "./Valise";
const Home = () => {
    const variants = {
        initial: {
          opacity: 0,
          transition: { duration: 0.5 },
          x: 100,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
        exit: {
          opacity: 0,
          transition: { duration: 0.3 },
          x: -100,
        }
      };
    return (
        <motion.div
        className="home"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
     <div id="home">
  
   

         <GridTemplate/>

    
     
 
         <div className="fixed-bottom">
    <ButtonsBottom right="/valise"/>
    </div>
            </div>
            </motion.div>
    );
}

export default Home;