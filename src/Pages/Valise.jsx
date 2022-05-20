import '../Styles/Pages/Home.css'
import GridTemplate1 from "../Components/valise/Grid";
import { Heading, Text } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
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
     <Tabs variant='soft-rounded'isFitted colorScheme='transparent' >
  
  <TabPanels>
    <TabPanel>
      
    <Text mt="80px" mb="20px" size="18px" color="gray.500">CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</Text>
        <Heading   as="u" color="white"> What I Do </Heading>

       
        <GridTemplate1 
         title='Full Stack Development'
         desc='
         ⚡ Building responsive App in React.js
         ⚡ Building responsive websites using Chakra Ui'
      src='https://assets5.lottiefiles.com/private_files/lf30_obidsi0t.json'
      right="/"
      />


    </TabPanel>
    <TabPanel>
    <Text mt="100px" mb="20px" size="18px" color="gray.500">CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</Text>
        <Heading   as="u" color="white"> What I Do </Heading>

    <GridTemplate1 
         title='Full Stack Development'
         desc='
         ⚡ Developing Smart Contract using Solidity on Hardhat.
        
         ⚡ Building Scripts for automated testing deployment of Smart Contracts using  Infura
         
         ⚡ Experience of using Openzeppelin Smart Contract Standards
         
         ⚡ Developing NFT Smart Contracts using ERC-721 Token Standard
         
         ⚡ Building Dapps with React.js, Solidity using Web3.js, IPFS'
      src='https://assets5.lottiefiles.com/packages/lf20_dt0twxk1.json'
      left="/"
      right="/"/>
    
    </TabPanel>
  </TabPanels>
  <TabList mb="140px">
    <Tab>Web Dev</Tab>
    <Tab>Blockchain Back-up</Tab>
  </TabList>

</Tabs>
   
    

      </div>
</motion.div>

    );
}

export default Valise;