import React from 'react';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';
import '../../Styles/Pages/Home.css'
class Back extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // 1. create a reference for the lottie player
  }
  componentDidMount() {
    // 3. listen for player load. see lottie player repo for other events
    this.myRef.current.addEventListener('load', function (e) {
      // 4. configure the interactivity library
      create({
        mode:"cursor",
        player: "#eightthLotties",
        actions:  [
            {
                position: { x: [0, 1], y: [0, 1] },
                type: "seek",
                frames: [0, 75]
            }
        ],
      });
    });
  }
  render() {
    return (
  <div id='video'>
        <lottie-player 
          ref={this.myRef} // 2. set the reference for the player
          id='eightthLotties'
     
         autoplay
          mode="normal"
          src="https://assets4.lottiefiles.com/packages/lf20_o7udjsac.json"
          
        ></lottie-player>
</div>
    );
  }
}

export default Back;