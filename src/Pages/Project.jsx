import '../Styles/Pages/Home.css'
import { motion } from "framer-motion";
import { Center, Wrap, WrapItem } from '@chakra-ui/react';
import title from '../Components/project/Prj.json'
import CardB from '../Components/project/CardProject';
const Project = () => {
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
          <Center>
      <Wrap spacing='85px' mt='250px'  >
   {title.map((data)=>(
     <WrapItem >
     <CardB key={data} data={data}/>
   </WrapItem>
   
   ))}
   </Wrap>
   </Center>
      </div>
    </motion.div>
  );
}

export default Project;