import React from "react";
import {ImHtmlFive} from 'react-icons/im'
import {SiCss3, SiReact, SiChakraui} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {BsBootstrapFill} from 'react-icons/bs'
import {SiSolidity, SiWeb3Dotjs, SiIpfs} from 'react-icons/si'
import {FaHardHat, FaEthereum} from 'react-icons/fa'
import {ReactComponent as Zep1} from '../assets/zep.svg'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Box, Grid, GridItem, Heading, Text, Button, Link, Icon } from "@chakra-ui/react";
import GridTemplate3 from "./compo/Grid3";
import { AiOutlineFilePdf } from "react-icons/ai";
import '../Styles/Pages/Home.css'

const GridTemplate= () => {

  return (
  <>
    <Grid templateColumns='repeat(3)' gap={4} mt={["50px", "100px", "150px", "150px", "250px", "250px"]}  >
 
      <GridItem colSpan={[3,3, 3, 3, 2, 2]} ml= {["35px", "110px", "150px", "250px", "250px", "350px"]} >
        
      <Box p={5} shadow='md' borderWidth='1px' maxW="lg" mt={["50px", "0px", "0px", "0px", "50px", "50px"]}  >
        <Heading mb="35px" color="white"> Hi, Im Nassim</Heading>
        <Text mt="10px" fontSize="20px" color="gray.200" >I'm passionate Full Stack web developer. I began programming, end of the year 2020. having an knowledge of web applications with Html, Css, Javascript, React.js, and Blockchain development on Ethereum, Solidity, Web3.js, Ether.js</Text>
      </Box>
    
      </GridItem>

      <GridItem colStart={ [1, 1, 1, 1,3, 3]  } colEnd={[3, 3, 3, 3, 3, 3]} ml= {["60px", "250px", "150px", "200px", "0px", "0px"]}mr= {["0px", "0px", "0px", "0px", "250px", "250px"]}>
    
        <Player
        autoplay
        loop
        src="https://assets7.lottiefiles.com/packages/lf20_ljx86sv6.json"
        style={{ maxHeight: '400px', maxWidth: '400px' }}
        >
        <Controls visible={false}  />
        </Player>
       
      </GridItem>

      <GridItem  colSpan={[2,3]} mt={['30px', '40px','100px']} ml= {["60px", "150px", "0px", "0px", "0px", "0px"]}   >
      
        <Button  ><Link href='https://nass.mypinata.cloud/ipfs/QmTypPepAxyhysd7Z13cBWSj6ohEiQubpNiF3u7dzQ5mjc' isExternal><Icon bg='white' maxW='200px' as={AiOutlineFilePdf}/>SEE MY RESUME</Link></Button>
       
      </GridItem>
     
      <GridItem  colSpan={3} mt={['30px', '40px','50px']} ml= {["0px", "0px", "50px", "150px", "20%", "35%"]}  >
     
          <GridTemplate3
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
            icon7={SiSolidity}
            color7='#DD6B20'
            icon8={SiWeb3Dotjs}
            color8='#3182CE'
            icon9={FaHardHat}
            color9='#ECC94B'
            icon10={FaEthereum}
            color10='#6B46C1'
            icon11={Zep1}
            color11='#00B5D8'
            icon12={SiIpfs}
            color12='#76E4F7'
            right="/valise"
            />
    
      </GridItem>

    </Grid>
  </> 
  );
};

export default GridTemplate;


