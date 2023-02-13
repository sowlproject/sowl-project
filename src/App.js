import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Home from './Home.js';
import Frame from './Frame.js';
import Camera from './Camera.js';
import Select from './Select.js';



let imageSet = []
let selectedFew = ["X","X","X","X","X","X","X","X"]

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
          <Route path="/camera" element={<Camera imageSrc={imageSet} selected={selectedFew} />} />
          <Route path='/Select' element={<Select imageSrc={imageSet}/>} />
        </Routes>
      </BrowserRouter>
      
      </FullScreen>
    </>
  )
}

export default App;
