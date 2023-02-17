import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Home from './Home.js';
import Frame from './Frame.js';
import Camera from './Camera.js';
import Select from './Select.js';
import Radio from './Radiotest.js';

let imageSet = [];
let imageSelected4 = [];

let selectedFrame = 0;


export function App() {
  const handle = useFullScreenHandle();
  return (
    <>
    <FullScreen className="full-screen" handle={handle}>
    <button class="fullscbutton" onClick={handle.enter}>전체화면</button>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/frame" element={<Frame />} />
          <Route path="/radio" element={<Radio />} />
          <Route path="/camera" element={<Camera imageSrc={imageSet} selected={imageSelected4} />} />
          <Route path='/Select' element={<Select imageSrc={imageSet}/>} />
        </Routes>
      </BrowserRouter>
      
      </FullScreen>
    </>
  )
}

export default App;