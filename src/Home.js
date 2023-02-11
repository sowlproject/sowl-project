import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import Home_camera_icon from "./img/Home_camera_icon.png";

export default function Home() {
    return (
            <div className="HomeDiv">
                <h1 className="Title">S.owl 네컷</h1>
                <img src={Home_camera_icon} className="Home_camera_icon" alt="camera_icon"></img>
                <Link to="/frame" className="StartButton"><h5>촬영 시작하기</h5></Link>
                <h3 className="kor_subtext">촬영 시작 버튼을 눌러 소울네컷 촬영을 시작합니다.</h3>
                <h4 className="eng_subtext">Press the start button to shooting the s.owl 4 cut.</h4>
            </div>
    );
}
