import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Frame.scss";
import Radio from './Radiotest.js';
import NextButton from './nextButton.js';
//import {setFValue} from "./App";
import Frame0 from "./img/Frame_black_480.png";
import Frame1 from "./img/Frame_navy_480.png";
import Frame2 from "./img/Frame_skhu_480.png";
import Frame3 from "./img/Frame_yellowgreen_480.png";
import AppContext from './AppContext';

export default function Frame(props) {
    

    const myContext = useContext(AppContext);
    
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
                    <td onClick={() => myContext.setFrame(0)}><img src={Frame0} className="frame_base" alt="camera_icon"></img></td>
                    <td onClick={() => myContext.setFrame(1)}><img src={Frame1} className="frame_base" alt="camera_icon"></img></td>
                    <td onClick={() => myContext.setFrame(2)}><img src={Frame2} className="frame_base" alt="camera_icon"></img></td>
                    <td onClick={() => myContext.setFrame(3)}><img src={Frame3} className="frame_base" alt="camera_icon"></img></td>
                </tr>
            </table>
            <Radio></Radio>
            <Link to="/Camera"><NextButton></NextButton></Link>
            <br></br>
        </div>
    );
}
