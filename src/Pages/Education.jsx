import '../Styles/Pages/Home.css'
import { motion } from "framer-motion";
import React from "react";
import { Grid, GridItem,ListItem, ListIcon, List, Heading } from "@chakra-ui/react";
import ButtonsBottom from '../Components/ButtonBottom';
import { Fade } from 'react-reveal';
import { Controls, Player } from '@lottiefiles/react-lottie-player';
import SliderExp from '../Components/compo/Slider';
import {ReactComponent as Fr} from '../assets/country/france.svg'
import {ReactComponent as En} from '../assets/country/En.svg'
import {ReactComponent as Sa} from '../assets/country/s-a.svg'
import {ReactComponent as Sp} from '../assets/country/spain.svg'

const Education = () => {

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
      /**/
    return (
      <motion.div
        className="home"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <div id="home">
          <Grid templateColumns='repeat(3)' gap={4} mt={["50px","100px","150px"]}  >

          <GridItem  colSpan={[2, 2, 2, 2, 3, 3]} mt={['90px', '40px','100px']}    >
              <Heading  color="#a9b4f1" > Bonjour, Hello, Hola, سلام ... </Heading>
            </GridItem>

        
        
            <GridItem colStart={ [1, 1, 1, 1,2, 2]  } colEnd={[3, 3, 3, 3, 3, 3]}   >
           <Grid column='repeat(5)'>
           <GridItem  colSpan={[2,1]} mt={['0px', '40px','40px']} ml={["30px", "0px", "0px"]} >
              <Fade bottom duration={8000}>
              <Player
              autoplay
              loop
              src='https://assets4.lottiefiles.com/packages/lf20_YN73eT.json'
              style={{ maxHeight: '300px', maxWidth: '300px',marginTop:"50px", marginRight:"30px" }}
              >
              <Controls visible={false}  />
              </Player>
              </Fade>
            </GridItem>
           
            <GridItem  colStart={ [1, 1, 2, 2, 2, 2]} colEnd={[3, 3, 3, 3, 5, 5]} mt={['0px', '40px','150px']} ml={['0px', '40px','150px','100px']}  >
              
                <List spacing={3} color="white" >
                    <ListItem mb="50px" >
                    <ListIcon as={Fr}  mb="30px" />
                    <br/>
                        <SliderExp val={100} slideval={100} col='blue' />
                    </ListItem>
                    <ListItem mb="50px">
                    <ListIcon as={En}  mb="30px" />
                    <br/>
                        <SliderExp val={65}  slideval={65} col='red' />
                    </ListItem>
                    <ListItem mb="50px">
                    <ListIcon as={Sa}  mb="30px" /> <ListIcon as={Sp}  mb="30px" />
                    <br/>
                        <SliderExp val={40}  slideval={40} col='green' />
                    </ListItem >
                </List>
              
            </GridItem>
           </Grid>
            </GridItem>

          </Grid>
        </div>
        <div className="fixed-bottom" >
        <ButtonsBottom left='/valise' right='/project'/>
        </div>
    </motion.div>
    );
}

export default Education;
