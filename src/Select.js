import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Select.scss";
import "./Frame.scss";
import Frame_base_1 from "./img/Frame_base_1.png";
// import CaptureImg from "./img/CaptureImg.png";
import imageSet from "./App";
import imageSelected4 from "./App";
function Frame() {
  return<img src={Frame_base_1}  alt="frame" className="frameImgPreview" />
}

function SelectNum(data) {
  return(
    <div className="circle"><span>{data}</span></div>
    // 1 부분을 number로 바꾸어 주고 동적으로 해야할 것.
  )
}
var dataptr = [];

// 기존 8개의 사진이 들어있는 배열에서 선택한 사진을 또다른 배열에 다시 담는 함수
function selectImgFile() {
  
}
function ImgList() {
  function select(obj) {
    const rootElement = document.getElementById(obj);
    const elemet = React.createElement("SelectNum");
    ReactDOM.render(elemet, rootElement); // (주입할 대상, root) -> 자바스크립트로 따지면 append()
  }
  return(
    <table className="ImageTable">
      <tbody>
        <tr>
          <button id="select1"><img src={imageSet[0]} alt="exampleImg" className="captureImg" id="img1" onClick={selectImgFile()}/><SelectNum></SelectNum></button>
          <button id="select2"><img src={imageSet[1]} alt="exampleImg" className="captureImg" id="img2" onClick={selectImgFile()}/></button>
        </tr>
        <tr>
          <button id="select3"><img src={imageSet[2]} alt="exampleImg" className="captureImg" id="img3" onClick={selectImgFile()}/></button>
          <button id="select4"><img src={imageSet[3]} alt="exampleImg" className="captureImg" id="img4" onClick={selectImgFile()}/></button>
        </tr>
        <tr>
          <button id="select5"><img src={imageSet[4]} alt="exampleImg" className="captureImg" id="img5" onClick={selectImgFile()}/></button>
          <button id="select6"><img src={imageSet[5]} alt="exampleImg" className="captureImg" id="img6" onClick={selectImgFile()}/></button>
        </tr>
        <tr>
          <button id="select7"><img src={imageSet[6]} alt="exampleImg" className="captureImg" id="img7" onClick={selectImgFile()}/></button>
          <button id="select8"><img src={imageSet[7]} alt="exampleImg" className="captureImg" id="img8" onClick={selectImgFile()}/></button>
        </tr>
      </tbody>
    </table>
  )
}

function Select() {
  return(
    <div className="bodyDiv">
      <h1 className="title">사진을 선택해주세요</h1>
      <div className="centerContainer">
        <Frame></Frame>
        <ImgList></ImgList>
        
      </div>
    </div>
  )
}

export default Select;