import React, { Component } from 'react'

class Music extends React.Component {
    constructor(props) {
    super(props);
    this.state = {

      play: false,
      pause: true

    };

    this.url = "./src/audio/shutterSound.mp3";
    this.audio = new Audio(this.url);

  }

  play(){
    this.setState({
      play: true,
      pause: false
    });
    console.log(this.audio);
    this.audio.play();
  }
  
  pause(){
  this.setState({ play: false, pause: true });
    this.audio.pause();
  }
  
  render() {
    
  return (
    <div>
    </div>
    );
  }
}


export default Music;