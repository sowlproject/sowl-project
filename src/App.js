import { React, useState } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Home from './Home.js';
import Frame from './Frame.js';
import Camera from './Camera.js';
import Select from './Select.js';
import Export from './Export.js';
import ReactAudioPlayer from "react-audio-player";
import bgmusic from "./bgm/여름밤의꿈1.mp3";
import AppContext from './AppContext';

let imageSet = [];

export function App() {
  const handle = useFullScreenHandle();
  const [FValue, setFrame] = useState(0);
  const [imageSelected4] = useState([]);
  const tFValue = (e) => {
    FValue = e;
  };
  const FV = {
    FValue: FValue,
    imageSelected4: imageSelected4,
    setFrame,
    tFValue
  };
  return (
    <>
      <AppContext.Provider value={FV}>
        <FullScreen className="full-screen" handle={handle}>
          <button className="fullscbutton" onClick={handle.enter}>전체화면</button>
          <ReactAudioPlayer src={bgmusic} autoPlay loop />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/frame" element={<Frame value={FV} />} />
              <Route path="/camera" element={<Camera imageSrc={imageSet} />} />
              <Route path='/Select' element={<Select imageSrc={imageSet} selected={FV}/>} />
              <Route path='/Export' element={<Export imageSrc={FV} />} />
            </Routes>
          </BrowserRouter>
        </FullScreen>
      </AppContext.Provider>
    </>
  )
}

export default App;
