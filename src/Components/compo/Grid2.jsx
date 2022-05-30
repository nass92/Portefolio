import React from "react";
import { Fade } from "react-reveal";
import { Box, Center, HStack, Icon } from "@chakra-ui/react";
import {
  List,
  ListItem,
} from '@chakra-ui/react'
import SliderExp from "./Slider";

const GridTemplate2= ({color ,color2, color3, src, left, right, val,icon, icon2, icon3, icon4, color4,color5, icon5, icon6, color6}) => {

  return (
  <>
    <Box mt={["25px","60px","110px"]}mb={["110px","60px","0px"]}>
      <Center >
      <Fade bottom duration={5500}>
      <Box p={5} shadow='md' borderWidth='1px' maxW="lg" >
        <HStack spacing={8}>
          {/* The default icon size is 1em (16px) */}
          <Icon as={icon} w={8} h={8}  color={color}/>

          {/* Use the `boxSize` prop to change the icon size */}
          <Icon as={icon2}w={8} h={8} color={color2} />

          <Icon as={icon4}w={8} h={8} color={color4} />
          {/* Use the `color` prop to change the icon color */}
          <Icon as={icon3} w={8} h={8} color={color3}/>

          <Icon as={icon5} w={8} h={8} color={color5}/>

          <Icon as={icon6} w={8} h={8} color={color6} />
        </HStack>
        <List spacing={3}color="white" mt="30px">
        <ListItem mt='60px'>
          <SliderExp val={val} />
        </ListItem>
        </List>
      </Box>
      </Fade>
      </Center>
    </Box>
  </>
  );
};

export default GridTemplate2;
