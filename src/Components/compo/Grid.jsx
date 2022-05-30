import React from "react";
import { Fade } from "react-reveal";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Box, Center, Grid, GridItem, Heading, } from "@chakra-ui/react";
import ButtonsBottom from "../ButtonBottom";
import {
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { FcFlashOn} from 'react-icons/fc'

const GridTemplate1= ({title, desc,desc2,desc3,desc4,desc5, src, left, right}) => {

  return (
  <>
    <Center>
    <Grid templateColumns='repeat(3)' gap={4} mt={["0px","70px","80px"]}  >

      <GridItem colSpan={2} mt="50px" mr={["0px","30px","150px"]}  >
      <Fade left duration={3000}>
      <Box p={5} shadow='md' borderWidth='1px' maxW="lg" >
        <Heading  color="white">{title}</Heading>
        <List spacing={3}color="white" mt="30px">
          <ListItem >
            <ListIcon as={FcFlashOn} color='green.500' />
            {desc}
          </ListItem>
          <ListItem>
            <ListIcon as={FcFlashOn} color='green.500' />
            {desc2}
          </ListItem>
          <ListItem>
            <ListIcon as={FcFlashOn} color='green.500' />
            {desc3}
          </ListItem>
          <ListItem>
            <ListIcon as={FcFlashOn} color='green.500' />
            {desc4}
          </ListItem>
          <ListItem>
            <ListIcon as={FcFlashOn} color='green.500' />
            {desc5}
          </ListItem>
        </List>
      </Box>
      </Fade>
      </GridItem>
      
      <GridItem colStart={[2,3]} colEnd={[2,3]} >
      <Fade right duration={4000}>
        <Player
        autoplay
        loop
        src={src}
        style={{ maxHeight: '300px', maxWidth: '300px',marginTop:"50px", marginRight:"30px" }}
        >
        <Controls visible={false}  />
        </Player>
      </Fade>
      </GridItem>

    </Grid>
    </Center>

  </>
  );
};

export default GridTemplate1;
