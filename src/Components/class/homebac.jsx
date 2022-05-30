import React from 'react';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';

class Homeback extends React.Component {
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
        player: "#eightthLottie",
        actions: [
            {
                position: { x: [0, 1], y: [0, 1] },
                type: "seek",
                frames: [0, 160]
            }
        ],
      });
    });
  }
  render() {
    return (
   
        <lottie-player
          ref={this.myRef} // 2. set the reference for the player
          id="eightthLottie"
         play
          mode="normal"
          src="https://assets7.lottiefiles.com/packages/lf20_z96al44c.json"
          style={{ maxWidth: '500px',maxHeight:'500px' }}
        ></lottie-player>

    );
  }
}

export default Homeback;