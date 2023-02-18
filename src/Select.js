import React from 'react';
import ReactDOM from 'react-dom/client';
import * as fs from 'fs';
import "./Select.scss";
import "./Frame.scss";
import "./bgFrame.scss";
import imageSet from "./App";
import NextButton from './nextButton.js';
import { Link } from "react-router-dom";
import imageSelected4 from "./App";
<<<<<<< Updated upstream
import selectedFrame from "./Frame"; // 고친부분("./App" --> "./Frame")
import Frame0 from  "./Frame";
import Frame1 from "./Frame";
import Frame2 from "./Frame";
import Frame3 from "./Frame";
import checker from "./Frame";
=======
import App from "./Radiotest";
import Frame0 from "./img/Frame_black_480.png";
import Frame1 from "./img/Frame_navy_480.png";
import Frame2 from "./img/Frame_skhu_480.png";
import Frame3 from "./img/Frame_yellowgreen_480.png";
>>>>>>> Stashed changes


function frameNum() {
<<<<<<< Updated upstream
  if (checker == "Black") {
    console.log(checker);
    return Frame0;
  }
  else if (checker == "Navy") {
    console.log(checker);
    return Frame1;
  }
  else if (checker == "SKHU") {
    console.log(checker);
=======
  App = new App();
  if (App.state.selectValue === "Black") {
    return Frame0;
  }
  else if (App.state.selectValue === "Navy") {
    return Frame1;
  }
  else if (App.state.selectValue === "SKHU") {
>>>>>>> Stashed changes
    return Frame2;
  }
  else if(checker == "YellowGreen") {
    console.log(checker);
    return Frame3;
  }
}

function Frame() {
  return <img src={frameNum()} alt="frame" className="frameImgPreview" />
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

let selectData = 1;

let img0 = 0;
let img1 = 0;
let img2 = 0;
let img3 = 0;
let img4 = 0;
let img5 = 0;
let img6 = 0;
let img7 = 0;

function SelectNum() {
  return (
    <div className="circle"><span>{selectData}</span></div>
    // 1 부분을 number로 바꾸어 주고 동적으로 해야할 것.
  )
}

function ImgList() {



  function select(id, num, a) {
    // 기존 8개의 사진이 들어있는 배열에서 선택한 사진을 또다른 배열에 다시 담는 함수
  if (a === 0) {
    imageSelected4.push(imageSet[0]);
  }
  else if (a === 1) {
    imageSelected4.push(imageSet[1]);
  }
  else if (a === 2) {
    imageSelected4.push(imageSet[2]);
  }
  else if(a === 3) {
    imageSelected4.push(imageSet[3]);
  }
  else if(a === 4) {
    imageSelected4.push(imageSet[4]);
  }
  else if(a === 5) {
    imageSelected4.push(imageSet[5]);
  }
  else if(a === 6) {
    imageSelected4.push(imageSet[6]);
  }
  else if(a === 7) {
    imageSelected4.push(imageSet[7]);
  }
  fs.writeFileSync("./FinalImage", imageSelected4);

    const rootElement = document.getElementById(id);
    const elemet = React.createElement("SelectNum");
    ReactDOM.render(elemet, rootElement); // (주입할 대상, root) -> 자바스크립트로 따지면 append()
  }
  return (
    <table className="ImageTable">
      <tbody>
        <tr>
          <td onClick={() => select(this.id, 0, 0)}><img src={imageSet[0]} alt="exampleImg" className="captureImg" id="img1" /></td>
          <td onClick={() => select(this.id, 1, 1)}><img src={imageSet[1]} alt="exampleImg" className="captureImg" id="img2" /></td>
        </tr>
        <tr>
          <td onClick={() => select(this.id, 2, 2)}><img src={imageSet[2]} alt="exampleImg" className="captureImg" id="img3" /></td>
          <td onClick={() => select(this.id, 3, 3)}><img src={imageSet[3]} alt="exampleImg" className="captureImg" id="img4" /></td>
        </tr>
        <tr>
          <td onClick={() => select(this.id, 4, 4)}><img src={imageSet[4]} alt="exampleImg" className="captureImg" id="img5" /></td>
          <td onClick={() => select(this.id, 5, 5)}><img src={imageSet[5]} alt="exampleImg" className="captureImg" id="img6" /></td>
        </tr>
        <tr>
          <td onClick={() => select(this.id, 6, 6)}><img src={imageSet[6]} alt="exampleImg" className="captureImg" id="img7" /></td>
          <td onClick={() => select(this.id, 7, 7)}><img src={imageSet[7]} alt="exampleImg" className="captureImg" id="img8" /></td>
        </tr>
      </tbody>
    </table>
  )
}

function Select() {
  return (
    <div className="bodyDiv">
      <div className='selectBgFrame1'>
        <BgFrame></BgFrame>
      </div>
      <div className='selectBgFrame2'>
        <BgFrame></BgFrame>
      </div>
      <h1 className="title">사진을 선택해주세요</h1>
      <div className="centerContainer">
        <Frame></Frame>
        <ImgList></ImgList>
      </div>
      <Link to="/Export"><NextButton></NextButton></Link>
    </div>
  )
}

export default Select;