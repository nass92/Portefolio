
import React from "react";
import { Fade } from "react-reveal";
import { Box, Grid, GridItem, HStack, Icon } from "@chakra-ui/react";
import ButtonsBottom from "../ButtonBottom";


const GridTemplate3= ({color ,color2, color3, src, left, right, val,icon, icon2, icon3, icon4, color4,color5, icon5, icon6, color6, color7, icon7, icon8, color8, icon9, color9, icon10, color10, icon11, color11, icon12, color12}) => {

  return (
  <>
    <Box mt={["25px","60px","110px"]}mb={["110px","60px","0px"]} >
    
     <Fade bottom duration={5500}>
     <Box p={5} shadow='md' borderWidth='1px' maxW="lg" >
       <Grid column='repeat(3)'>
            <GridItem colSpan={2}>
            <HStack spacing={8}>
              <Icon as={icon} w={8} h={8}  color={color}/>
              <Icon as={icon2}w={8} h={8} color={color2} />
              <Icon as={icon4}w={8} h={8} color={color4} />
              <Icon as={icon3} w={8} h={8} color={color3}/>
              <Icon as={icon5} w={8} h={8} color={color5}/>
              <Icon as={icon6} w={8} h={8} color={color6} />
            </HStack>
            </GridItem>
            <GridItem colStart={[2,3]} colEnd={[2,3]} mt={["35px","0px","0px"]} >
            <HStack spacing={8}>
              <Icon as={icon7} w={8} h={8}  color={color7}/>
              <Icon as={icon8}w={8} h={8} color={color8} />
              <Icon as={icon9}w={8} h={8} color={color9} />
              <Icon as={icon10} w={8} h={8} color={color10}/>
              <Icon as={icon11} w={8} h={8} color={color11}/>
              <Icon as={icon12} w={8} h={8} color={color12} />
            </HStack>
            </GridItem>
       </Grid>
     </Box>
     </Fade>
   
    </Box>

    <div className="fixed-bottom" >
    <ButtonsBottom left={left} right={right}/>
    </div>
  </>
  );
};

export default GridTemplate3;
