import React from "react";

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Box, Center, Grid, GridItem, Heading, Link, SimpleGrid, Text  } from "@chakra-ui/react";
import ButtonsBottom from "../ButtonBottom";


const GridTemplate1= ({title, desc, src, left, right}) => {

  return (
  <>

    <Center>
   
<Grid templateColumns='repeat(3)' gap={4} mt={["0px","70px","80px"]}  >

  <GridItem colSpan={2} mt="50px"  >
  
  <Box p={5} shadow='md' borderWidth='1px' maxW="lg" >
  <Heading as="u" color="white">{title}</Heading>
    
    <Text fs="20px" color="gray.300" >{desc}</Text>
    </Box>

     
 

    
    
  
  </GridItem>
  
  <GridItem colStart={[2,3]} colEnd={[2,3]}   >


  <Player
  autoplay
  loop
  src={src}
  style={{ maxHeight: '300px', maxWidth: '300px',marginTop:"50px", marginRight:"30px" }}
>

  <Controls visible={false}  />
</Player>


  </GridItem>
</Grid>
</Center>
<div className="fixed-bottom">
    <ButtonsBottom left={left} right={right}/>
    </div>
</>
  );
};

export default GridTemplate1;
