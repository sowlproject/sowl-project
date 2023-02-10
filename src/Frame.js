import React from "react";
import { Link } from "react-router-dom";
import "./Frame.scss";
import Home_camera_icon from "./img/Home_camera_icon.png";
import Frame_base_1 from "./img/Frame_base_1.png";

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
                        <td><Link to="/camera"><img src={Frame_base_1} className="frame_base" alt="camera_icon"></img></Link></td>
                        <td><Link to="/camera"><img src={Frame_base_1} className="frame_base" alt="camera_icon"></img></Link></td>
                        <td><Link to="/camera"><img src={Frame_base_1} className="frame_base" alt="camera_icon"></img></Link></td>
                    </tr>
                    <tr>
                        <td>555</td>
                        <td>666</td>
                        <td>777</td>
                        <td>888</td>
                    </tr>
                </table>
                <Link to="/Camera">go to Camera</Link>
            </div>
    );
}
