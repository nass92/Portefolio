import React from 'react'
import GridTemplate1 from './Grid';
import { motion } from "framer-motion";
const Valise2 = () => {
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
    
    <GridTemplate1
         title='Full Stack Development'
         desc='
         ⚡ Developing Smart Contract using Solidity on Hardhat.
        
         ⚡ Building Scripts for automated testing deployment of Smart Contracts using  Infura
         
         ⚡ Experience of using Openzeppelin Smart Contract Standards
         
         ⚡ Developing NFT Smart Contracts using ERC-721 Token Standard
         
         ⚡ Building Dapps with React.js, Solidity using Web3.js, IPFS'
      src='https://assets5.lottiefiles.com/packages/lf20_dt0twxk1.json'
      left=""
      right="/"/>
    
    
</motion.div>

    )
}
export default Valise2