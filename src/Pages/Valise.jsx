import '../Styles/Pages/Home.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { motion } from "framer-motion";
import Valise2 from '../Components/valise/Valise2';
import Valise1 from '../Components/valise/Valise1';
import Slide1 from '../Components/valise/Slide1';
import Slide2 from '../Components/valise/Slide2';
import ButtonsBottom from '../Components/ButtonBottom';
const Valise = () => {

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
      
    return (
        
    <motion.div
    className="home"
    initial="initial"
    animate="visible"
    exit="exit"
    variants={variants}
     >
      <div id="home">
        <Tabs variant='soft-rounded'isFitted colorScheme='transparent' mt="80px" >
          <TabPanels>
            <TabPanel>
              <Valise1/>
            </TabPanel>
            <TabPanel>
              <Valise2/>
            </TabPanel>
          </TabPanels>

          <TabList mt={["0px", "30px", "100px"]}  >
          <Tab color="white">Web Dev</Tab>
          <Tab color="white">Blockchain Back-up</Tab>  
          </TabList>

          <TabPanels>
          <TabPanel>
            <Slide1/>
          </TabPanel>
          <TabPanel>
            <Slide2/>
          </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

    <div className="fixed-bottom" >
    <ButtonsBottom left="/" right="/education"/>
    </div>
    </motion.div>
    );
}

export default Valise;