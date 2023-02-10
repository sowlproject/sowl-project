import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import Home_camera_icon from "./img/Home_camera_icon.png";

export default function Home() {
    return (
            <div className="HomeDiv">
                <h1>S.owl 네컷</h1>
                <img src={Home_camera_icon} className="Home_camera_icon" alt="camera_icon"></img>
                <h3>아무곳이나 눌러 소울네컷 촬영을 시작합니다.</h3>
                <h4>Click anywhere to start S.owl 4 cut.</h4>
                <Link to="/frame">   go to Frame</Link>
            </div>
    );
}
