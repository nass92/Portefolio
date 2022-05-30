import React from 'react'
import { motion } from "framer-motion";
import { BsGithub } from 'react-icons/bs';
import {ReactComponent as Insta} from '../assets/réseaux/insta.svg'
import {ReactComponent as Fb} from '../assets/réseaux/fb.svg'
import { Fade } from 'react-reveal';
import { Controls, Player } from '@lottiefiles/react-lottie-player';
import {Textarea,
    FormControl,
    FormLabel,
    FormHelperText,
    Button,
    Center,
    Container,
    Grid,
    GridItem,
    Heading, 
    HStack, 
    Icon, 
    Input 
  } from '@chakra-ui/react'

const Contact = () => {
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
      let [value, setValue] = React.useState('')
      let handleInputChange = (e) => {
        let inputValue = e.target.value
        setValue(inputValue)
      }

    return(
    <motion.div
    className="home"
    initial="initial"
    animate="visible"
    exit="exit"
    variants={variants}
    >
      <Center> <Heading mt="150px" mb="50px" color="gray.500" > Dont be shy, send me a message ... </Heading> </Center>

      <Grid column='repeat(3)' mt={["75px","130px","150px"]}  >

        <GridItem colSpan={[2,2,2]} ml={["0px","50px","20px","40px","0px","0px"]} >
        <Container maxW='2xl' p={5}    border="30px" boxShadow="rgba(100, 100, 111, 0.5) 0px 7px 29px 0px"   centerContent mt={["0px","20px","50px"]} >
          <FormControl isRequired mb='35px' mt='30px' >
            <FormLabel htmlFor='first-name' color="white"mb="20px" >First name</FormLabel>
            <Input bg='#ffffff' id='first-name' placeholder='First name' />
          </FormControl>
          <FormControl isRequired mb='35px'>
            <FormLabel htmlFor='email' color="white"mb="20px">Email address</FormLabel>
            <Input bg='#ffffff' id='email' type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl isRequired mb='35px'>
            <FormLabel  htmlFor='message' color="white"mb="20px">Your message </FormLabel>
            <Textarea
            bg='#ffffff'
                  value={value}
                  onChange={handleInputChange}
                  placeholder='Here is a sample placeholder'
                  size='md'
                />
          </FormControl>
        </Container>
        </GridItem>
        <GridItem colStart={[3,2,3]} colEnd={[1,2,3]} mr={["0px","0px","0px","0px","0px","0px"]} mt={["45px","30px", "0px"]}  >
        <Container p={5} shadow='md' borderWidth='1px' maxW="md" mt={["45px","25px", "50px"]} >
           <Center> <Button size='lg'  border='1px solid red' color='white' colorScheme='transparent'> Send </Button></Center>
        </Container>
        <Container>
        <Center>
        <Fade bottom duration={4000}>
        <Player
        autoplay
        loop
        src='https://assets2.lottiefiles.com/private_files/lf30_e9t04qcb.json'
        style={{ maxHeight: '300px', maxWidth: '300px',marginTop:"50px", position:''}}
        >
          <Controls visible={false}  />
        </Player>
        </Fade>
        </Center>
        </Container>
        <Container p={5} shadow='md' borderTop='1px solid white' maxW="md"mt={["25px","25px", "0px"]}  >
          <Center>
          <HStack spacing={8}> 
            <Icon as={Fb} w={8} h={8}  color='blue'/>
            <Icon as={Insta}w={8} h={8} />
            <Icon as={BsGithub}w={8} h={8} color="#ffffff" />
          </HStack>
          </Center>
        </Container>
      </GridItem>
        <GridItem  colSpan={[2,3]} mt={['30px', '40px','100px']}></GridItem>
</Grid>


      </motion.div>
    )
}
export default Contact