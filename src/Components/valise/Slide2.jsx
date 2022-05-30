import React from 'react'
import { motion } from "framer-motion";
import GridTemplate2 from '../compo/Grid2';
import {SiSolidity, SiWeb3Dotjs, SiIpfs} from 'react-icons/si'
import {FaHardHat, FaEthereum} from 'react-icons/fa'
import {ReactComponent as Zep1} from '../../assets/zep.svg'

const Slide2 = () => {

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
        icon={SiSolidity}
        color='#DD6B20'
        icon2={SiWeb3Dotjs}
        color2='#3182CE'
        icon3={FaHardHat}
        color3='#ECC94B'
        icon4={FaEthereum}
        color4='#6B46C1'
        icon5={Zep1}
        color5='#00B5D8'
        icon6={SiIpfs}
        color6='#76E4F7'   
        val={65}
        src='https://assets3.lottiefiles.com/datafiles/fab7172a9302d416bcdb8ac7e1c71123/data.json'
       />
     </motion.div>
)
}
export default Slide2