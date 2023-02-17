import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Select.scss";
import "./Frame.scss";
import "./bgFrame.scss";
import Frame_base_1 from "./img/Frame_base_1.png";
// import CaptureImg from "./img/CaptureImg.png";
import {imageSet, imageSelected4, selectedFrame} from "./App";

function 

function Frame() {
  return <img src={frameNum} id='frameDefault' alt="frame" className="frameImgPreview" />
}

function SelectNum(data) {
  return (
    <div className="circle"><span>{data}</span></div>
    // 1 부분을 number로 바꾸어 주고 동적으로 해야할 것.
  )
}



function ImgList() {
  function select(obj) {
    const rootElement = document.getElementById(obj);
    const elemet = React.createElement("SelectNum");
    ReactDOM.render(elemet, rootElement); // (주입할 대상, root) -> 자바스크립트로 따지면 append()
  }

  // 기존 8개의 사진이 들어있는 배열에서 선택한 사진을 또다른 배열에 다시 담는 함수
  function selectImgFile(a) {
    if (a === 0) {
      imageSelected4.push(imageSet[0]);
    }
    else if (a === 1) {
      imageSelected4.push(imageSet[1]);
    }
    else if (a === 2) {
      imageSelected4.push(imageSet[2]);
    }
    else if (a === 3) {
      imageSelected4.push(imageSet[3]);
    }
    else if (a === 4) {
      imageSelected4.push(imageSet[4]);
    }
    else if (a === 5) {
      imageSelected4.push(imageSet[5]);
    }
    else if (a === 6) {
      imageSelected4.push(imageSet[6]);
    }
    else if (a === 7) {
      imageSelected4.push(imageSet[7]);
    }

  }

  return (
    <table className="ImageTable">
      <tbody>
        <tr>
          <button id="select1"><img src={imageSet[0]} alt="exampleImg" className="captureImg" id="img1" /></button>
          <button id="select2"><img src={imageSet[1]} alt="exampleImg" className="captureImg" id="img2" /></button>
        </tr>
        <tr>
          <button id="select3"><img src={imageSet[2]} alt="exampleImg" className="captureImg" id="img3" /></button>
          <button id="select4"><img src={imageSet[3]} alt="exampleImg" className="captureImg" id="img4" /></button>
        </tr>
        <tr>
          <button id="select5"><img src={imageSet[4]} alt="exampleImg" className="captureImg" id="img5" /></button>
          <button id="select6"><img src={imageSet[5]} alt="exampleImg" className="captureImg" id="img6" /></button>
        </tr>
        <tr>
          <button id="select7"><img src={imageSet[6]} alt="exampleImg" className="captureImg" id="img7" /></button>
          <button id="select8"><img src={imageSet[7]} alt="exampleImg" className="captureImg" id="img8" /></button>
        </tr>
      </tbody>
    </table>
  )
}

function Select() {
  return (
    <div className="bodyDiv">
      <h1 className="title">사진을 선택해주세요</h1>
      <div className="centerContainer">
        <Frame></Frame>
        <ImgList></ImgList>
      </div>
      <Link to="/Export">go to Select</Link>
    </div>
  )
}

export default Select;