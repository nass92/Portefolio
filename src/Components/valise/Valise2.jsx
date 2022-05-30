import React from 'react'
import GridTemplate1 from '../compo/Grid';
import { motion } from "framer-motion";
import { Heading, Text } from '@chakra-ui/react';

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
      <Text mt="100px" mb="20px" size="18px" color="gray.500">CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</Text>
      <Heading   color="white"> What I Do </Heading>
      <GridTemplate1
          title='Blockchain Back-Up'
          desc=' Developing Smart Contract using Solidity on Hardhat.'
          desc2='Building Scripts for automated testing deployment of Smart Contracts using Infura.'
          desc3='Experience of using Openzeppelin Smart Contract Standards.'
          desc4='Developing NFT Smart Contracts using ERC-721 Token Standard.'
          desc5='Building Dapps with React.js, Solidity using Web3.js, IPFS, Pinata.'
        src='https://assets5.lottiefiles.com/packages/lf20_dt0twxk1.json'
        left=""
        />
    </motion.div>
    )
}
export default Valise2