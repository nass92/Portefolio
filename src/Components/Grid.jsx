import React from "react";

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Box, Center, Grid, GridItem, Heading, Link, SimpleGrid, Text  } from "@chakra-ui/react";


const GridTemplate1= ({title, desc, src}) => {

  return (
  <>

    <Center>
   
<Grid templateColumns='repeat(3)' gap={4} mt={["50px","100px","150px"]}  >

  <GridItem colSpan={2} mt="100px"  >
  
  <Box p={5} shadow='md' borderWidth='1px' maxW="lg" >
  <Heading as="u" color="white">{title}</Heading>
    
    <Text fs="20px" color="gray.300" >{desc}</Text>
    </Box>

     
 

    
    
  
  </GridItem>
  
  <GridItem colStart={[2,3]} colEnd={[2,3]}   >

<Center>
  <Player
  autoplay
  loop
  src={src}
  style={{ maxHeight: '300px', maxWidth: '300px',marginTop:"50px", marginRight:"100px" }}
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

export default GridTemplate1;
