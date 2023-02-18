import React from "react";
import { Link } from "react-router-dom";
import "./Frame.scss";
import "./bgFrame.scss";
import Radio from './Radiotest.js';
import NextButton from './nextButton.js';
import selectedFrame from "./App";
import Frame0 from "./App";
import Frame1 from "./App";
import Frame2 from "./App";
import Frame3 from  "./App";
import checker from "./App";
function setFrame(num) {
    selectedFrame = num;
}

export default function Frame() {
    return (
        <div className="FrameDiv">
            <h1 className="title">프레임을 선택하세요.</h1>
            <table className="frame_table">
                <tr className="frame_name">
                    <td>Black</td>
                    <td>Navy</td>
                    <td>SKHU</td>
                    <td>YellowGreen</td>
                </tr>
                <tr>
                    <td onClick={() => {setFrame(0); checker = "Black";}}><img src={Frame0} className="frame_base" alt="camera_icon"></img></td>
                    <td onClick={() => {setFrame(1); checker = "Navy";}}><img src={Frame1} className="frame_base" alt="camera_icon"></img></td>
                    <td onClick={() => {setFrame(2); checker = "SKHU";}}><img src={Frame2} className="frame_base" alt="camera_icon"></img></td>
                    <td onClick={() => {setFrame(3); checker = "YellowGreen";}}><img src={Frame3} className="frame_base" alt="camera_icon"></img></td>
                </tr>
            </table>
            <Radio></Radio>
            <Link to="/Camera"><NextButton></NextButton></Link>
            <br></br>
            <div className='frameBgFrame1'>
                <BgFrame></BgFrame>
            </div>
            <div className='frameBgFrame2'>
                <BgFrame></BgFrame>
            </div>
        </div>
    );
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