import React from 'react'
import { motion } from "framer-motion";
import GridTemplate2 from '../compo/Grid2';
import {ImHtmlFive} from 'react-icons/im'
import {SiCss3, SiReact, SiChakraui} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {BsBootstrapFill} from 'react-icons/bs'

const Slide1 = () => {
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
      <GridTemplate2 
      icon={ImHtmlFive}
      color='#DD6B20'
      icon2={SiCss3}
      color2='#3182CE'
      icon3={IoLogoJavascript}
      color3='#ECC94B'
      icon4={BsBootstrapFill}
      color4='#6B46C1'
      icon5={SiReact}
      color5='#00B5D8'
      icon6={SiChakraui}
      color6='#76E4F7'
      val={65}
      src='https://assets3.lottiefiles.com/datafiles/fab7172a9302d416bcdb8ac7e1c71123/data.json'
      />
    </motion.div>
    )
}
export default Slide1