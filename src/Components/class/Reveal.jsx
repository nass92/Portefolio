// You can live edit this code below the import statements
import { Image } from '@chakra-ui/react';
import React from 'react';
import { Fade } from 'react-reveal';
import Reveal from 'react-reveal/Reveal';
import  Certif from '../../assets/alyra_certif.png'
class Reveale extends React.Component {
  render() {
    return (
      <div>
        <Fade top duration={4000}>
        <Image src={Certif}/>
        </Fade>
      </div>
    );
  }
}

export default Reveale;