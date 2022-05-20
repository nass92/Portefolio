import '../Styles/Pages/Home.css'
import GridTemplate1 from "../Components/Grid";
import { Heading, Text } from '@chakra-ui/react';
import ButtonsBottom from '../Components/ButtonBottom';
import { motion } from "framer-motion";
const Valise = () => {

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
  
   
        <Text mt="200px" mb="60px" size="18px" color="gray.500">CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</Text>
        <Heading   as="u" color="white"> What I Do </Heading>

       
        <GridTemplate1 
         title='Full Stack Development'
         desc='
         ⚡ Building responsive App in React.js
         ⚡ Building responsive websites using Chakra Ui'
      src='https://assets5.lottiefiles.com/private_files/lf30_obidsi0t.json'/>


      </div>
</motion.div>

    );
}

export default Valise;