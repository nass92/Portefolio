import React from 'react'
import { Container, SimpleGrid, useDisclosure } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Center,
} from '@chakra-ui/react'
import '../Styles/Component/NavBar.css'
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()


    return (
    <div id="header">
        <Link to='/' id='acceuil'>Nassim Gouja</Link>
        <div id="link-containers">
          <Link to="/"id="logo">Welcome</Link >
          <Link to="/valise"  id="logo" >What i do</Link >
          <Link to="/education" id="logo" >Education</Link >
          <Link to="/project"  id="logo" >Project</Link >
          <Link to="/contact" id="logo" >Contact Me</Link >
        </div>
        <div id="list-containers2">
          <button id="list-containers2" ref={btnRef} colorScheme='white' onClick={onOpen}>
          <AiOutlineMenu/>
           </button>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent background="#030003"  color="#a6ae74">
              <DrawerCloseButton />
              <DrawerHeader>Navigation</DrawerHeader>

              <DrawerBody>
              <Center>
              <SimpleGrid column={1} >
                <Link to="/"id="logo1">welcome</Link >
                <Link to="/valise"  id="logo1" >What i do</Link >
                <Link to="/education" id="logo1" >Education</Link >
                <Link to="/"  id="logo1" >Project</Link >
                <Link to="/contact" id="logo1" >Contact Me</Link >
              </SimpleGrid>
              </Center>
              </DrawerBody>

              <DrawerFooter id='footer-nav'>
                <Container >
              </Container>
                <Button variant='outline' mr={3} onClick={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
     </div>
    );
}

export default NavBar;