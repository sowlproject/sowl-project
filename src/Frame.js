import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Frame.scss";
import NextButton from './nextButton.js';
//import {setFValue} from "./App";
import Frame0 from "./img/Frame_base_1.png";
import Frame1 from "./img/Frame_base_2.png";
import Frame2 from "./img/Frame_base_3.png";
import Frame3 from "./img/Frame_base_4.png";
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
                    <td><img src={Frame0} className="frame_base" alt="camera_icon"></img></td>
                    <td><img src={Frame1} className="frame_base" alt="camera_icon"></img></td>
                    <td><img src={Frame2} className="frame_base" alt="camera_icon"></img></td>
                    <td><img src={Frame3} className="frame_base" alt="camera_icon"></img></td>
                </tr>
            </table>
            <table className="radioTable">
                <tbody>
                    <tr>
                        <td>
                            <input onClick={() => myContext.setFrame(0)} id="Black" value="Black" name="black" type="radio" className="inputradio"/>
                        </td>
                        <td>
                            <input onClick={() => myContext.setFrame(1)} id="Navy" value="Navy" name="black" type="radio" className="inputradio"/>
                        </td>
                        <td>
                            <input onClick={() => myContext.setFrame(2)} id="SKHU" value="SKHU" name="black" type="radio" className="inputradio"/>
                        </td>
                        <td>
                            <input onClick={() => myContext.setFrame(3)} id="YellowGreen" value="YellowGreen" name="black" type="radio" className="inputradio"/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Link to="/Camera"><NextButton></NextButton></Link>
            <br></br>
        </div>
        
    );
}
