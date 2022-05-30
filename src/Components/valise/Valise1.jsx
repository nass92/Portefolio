import React from 'react'
import GridTemplate1 from '../compo/Grid';
import { motion } from "framer-motion";
import { Heading, Text } from '@chakra-ui/react';
const Valise1 = () => {
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
      <Text mt="80px" mb="20px" size="18px" color="gray.500">CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</Text>
      <Heading   color="white"> What I Do </Heading>
      <GridTemplate1 
        title='Full Stack Development'
        desc=' Building responsive App in React.js'
        desc2=' Building responsive websites using Chakra Ui'
        src='https://assets5.lottiefiles.com/private_files/lf30_obidsi0t.json'
        left='/'
        
        />
     </motion.div>

    )
}
export default Valise1