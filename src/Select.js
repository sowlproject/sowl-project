import {React, useCallback, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Select.scss";
import "./Frame.scss";
import "./bgFrame.scss";
import imageSet from "./App";
//import imageSelected4 from "./App";
import selectedFrame from "./App"; // 고친부분("./App" --> "./Frame")
import NextButton from './nextButton.js';
import Frame0 from "./img/Frame_black_480.png";
import Frame1 from "./img/Frame_navy_480.png";
import Frame2 from "./img/Frame_skhu_480.png";
import Frame3 from "./img/Frame_yellowgreen_480.png";
import AppContext from './AppContext';
import config from './config.js';

let selectedImageIndex = []

function frameNum(selectedFrame) {
  if (selectedFrame === 0) {
    return Frame0;
  }
  else if (selectedFrame === 1) {
    return Frame1;
  }
  else if (selectedFrame === 2) {
    return Frame2;
  }
  else {
    return Frame3;
  }
}


function BgFrame() {
  return (
      <div className='bgFrame'>
        <div className='bgFrameSC'></div>
        <div className='bgFrameSC'></div>
        <div className='bgFrameSC'></div>
      </div>
  )
}

function ImgTable() {
  
  const [ ,test] = useState();
  const forceUpdate = useCallback(() => test({}), []);

  const myContext = useContext(AppContext);

  const handleImageClick = (index) => () => {
    if(selectedImageIndex.includes(index))
      selectedImageIndex.splice(selectedImageIndex.indexOf(index), 1);

    else if(selectedImageIndex.length < 4)
      selectedImageIndex.push(index);

      // imgPrevList.push(index);
    forceUpdate();
    console.log(selectedImageIndex);
  }
  
  const navigate = useNavigate();

  const renderNumber = (n) => {
    if(selectedImageIndex.indexOf(n) >= 0){
    return (
      <div className="circle">
        <span>
          {selectedImageIndex.indexOf(n) + 1}
        </span>
      </div>
    );
    }
  }

  const handleSaveClick = () => {
    
    if (selectedImageIndex.length == 4) {

      myContext.imageSelected4[0] = (myContext.FValue < 2 ? (myContext.FValue == 0 ? config.black : config.navy) : (myContext.FValue == 2 ? config.skhu : config.yellowgreen));
      let i = 1;
      for (var key in selectedImageIndex) {
        myContext.imageSelected4[i++] = imageSet[key];
      }
    }

    navigate("/Export");
  }

  return (
    <div>
      <div className="frameImgPreview">
        <table className='prevSCtable'>
          <tbody>
            <tr>
              <img src={imageSet[selectedImageIndex[0]]} className="prevFrameSC" />
            </tr>
            <tr>
              <img src={imageSet[selectedImageIndex[1]]} className="prevFrameSC" />
            </tr>
            <tr>
              <img src={imageSet[selectedImageIndex[2]]} className="prevFrameSC" />
            </tr>
            <tr>
              <img src={imageSet[selectedImageIndex[3]]} className="prevFrameSC" />
            </tr>
          </tbody>
        </table>
        <img src={frameNum(myContext.FValue)} alt="frame" className="prevFrame" />
      </div>
    <table className="ImageTable">
      <tbody>
        <tr>
          <td style={{ position: 'relative' }}>
            <img src={imageSet[0]} onClick={handleImageClick(0)} value className="captureImg" />
            {renderNumber(0)}
          </td>
          <td style={{ position: 'relative' }}>
            <img src={imageSet[1]} onClick={handleImageClick(1)} className="captureImg" />
            {renderNumber(1)}
          </td>
        </tr>
        <tr>
          <td style={{ position: 'relative' }}>
            <img src={imageSet[2]} onClick={handleImageClick(2)} className="captureImg" />
            {renderNumber(2)}
          </td>
          <td style={{ position: 'relative' }}>
            <img src={imageSet[3]} onClick={handleImageClick(3)} className="captureImg" />
            {renderNumber(3)}
          </td>
        </tr>
        <tr>
          <td style={{ position: 'relative' }}>
            <img src={imageSet[4]} onClick={handleImageClick(4)} className="captureImg" />
            {renderNumber(4)}
          </td>
          <td style={{ position: 'relative' }}>
            <img src={imageSet[5]} onClick={handleImageClick(5)} className="captureImg" />
            {renderNumber(5)}
          </td>
        </tr>
        <tr>
          <td style={{ position: 'relative' }}>
            <img src={imageSet[6]} onClick={handleImageClick(6)} className="captureImg" />
            {renderNumber(6)}
          </td>
          <td style={{ position: 'relative' }}>
            <img src={imageSet[7]} onClick={handleImageClick(7)} className="captureImg" />
            {renderNumber(7)}
          </td>
        </tr>
      </tbody>
      <div>
        <div onClick={ handleSaveClick }><NextButton></NextButton></div>
      </div>
    </table>
    </div>
  );
}

function Select() {
  const myContext = useContext(AppContext);

  return (
    <div className="bodyDiv">
      <div className='selectBgFrame1'>
        <BgFrame></BgFrame>
      </div>
      <div className='selectBgFrame2'>
        <BgFrame></BgFrame>
      </div>
      <h1 className="title">사진을 선택해주세요</h1>
      <h2 className='tiltle2'></h2>
      <div className="centerContainer">
        <ImgTable></ImgTable>
      </div>
    </div>
  )
}

export default Select;