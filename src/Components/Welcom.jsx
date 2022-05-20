import React from "react";

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Box, Center, Grid, GridItem, Heading, Link, SimpleGrid, Text  } from "@chakra-ui/react";


const GridTemplate= () => {

  return (
  <>
    <Center>
<Grid templateColumns='repeat(3)' gap={4} mt={["50px","100px","250px"]}  >

  <GridItem colSpan={2} mt="100px"  >
  
  <Box p={5} shadow='md' borderWidth='1px' maxW="lg" >
  <Heading as="u" color="white"> Hi, Im Nassim</Heading>
    
    <Text fs="20px" color="gray.300" >I'm passionate Full Stack web developer. I began programming, end of the year 2020. having an knowledge of web applications with Html, Css, Javascript, React.js, and Blockchain development on Ethereum, Solidity, Web3.js, Ether.js</Text>
    </Box>

     
 

    
    
  
  </GridItem>
  
  <GridItem colStart={[2,3]} colEnd={[2,3]}   >

<Center>
  <Player
  autoplay
  loop
  src="https://assets7.lottiefiles.com/packages/lf20_ljx86sv6.json"
  style={{ height: 'auto', width: 'auto',marginTop:"50px", marginRight:"100px" }}
>
  <Controls visible={false}  />
</Player>

</Center>
  </GridItem>
</Grid>
</Center>
</>
  );
};

export default GridTemplate;


