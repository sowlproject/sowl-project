import { React, useState, createContext, useContext } from 'react';
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
// import Frame0 from "./img/Frame_black_480.png";
// import Frame1 from "./img/Frame_navy_480.png";
// import Frame2 from "./img/Frame_skhu_480.png";
// import Frame3 from "./img/Frame_yellowgreen_480.png";
import AppContext from './AppContext';

let imageSet = [];

export function App() {
  const handle = useFullScreenHandle();
  const [FValue, setFrame] = useState(0);
  const [imageSelected4, setim4] = useState([]);
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
          <button class="fullscbutton" onClick={handle.enter}>전체화면</button>
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
      <button class="fullscbutton" onClick={handle.enter}>전체화면</button>
    </>
  )
}

export default App;
