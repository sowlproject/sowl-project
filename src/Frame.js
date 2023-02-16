import React from "react";
import { Link } from "react-router-dom";
import "./Frame.scss";
import Radio from './Radiotest.js';
import Frame_base_1 from "./img/Frame_base_1.png";
import Frame_base_2 from "./img/Frame_base_2.png";
import Frame_base_3 from "./img/Frame_base_3.png";
import Frame_base_4 from "./img/Frame_base_4.png";

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
                    <td><Link to="/camera"><img src={Frame_base_1} className="frame_base" alt="camera_icon"></img></Link></td>
                    <td><Link to="/camera"><img src={Frame_base_2} className="frame_base" alt="camera_icon"></img></Link></td>
                    <td><Link to="/camera"><img src={Frame_base_3} className="frame_base" alt="camera_icon"></img></Link></td>
                    <td><Link to="/camera"><img src={Frame_base_4} className="frame_base" alt="camera_icon"></img></Link></td>
                </tr>
                <tr>
                    <Radio></Radio>
                </tr>
            </table>
            <Link to="/Camera">go to Camera</Link>
        </div>
    );
}
