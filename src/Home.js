import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import Home_camera_icon from "./img/Home_camera_icon.png";
import Home_frame40 from "./img/Home-frame40.png";
import Home_frame60 from "./img/Home-frame60.png";
import "./bgFrame.scss";

export default function Home() {
    return (
            <div className="HomeDiv">
                <div className="homeBgFrame1">
                    <BgFrame></BgFrame>
                </div>
                <div className="homeBgFrame2">
                    <BgFrame></BgFrame>
                </div>
                <h1 className="Title">S.owl 네컷</h1>
                <img src={Home_camera_icon} className="Home_camera_icon" alt="camera_icon"></img>
                <div className="btn_block"><Link to="/frame" className="StartButton"><h5>촬영 시작하기</h5></Link></div>
                <h3 className="kor_subtext">촬영 시작 버튼을 눌러 소울네컷 촬영을 시작합니다.</h3>
                <h4 className="eng_subtext">Press the button to start the s.owl 4 cut.</h4>
                <h4 className="credit_text">본 서비스는 개발 동아리 S.owl에서 제작하였습니다. 개발 : 최준혁, 황재현, 윤준석 / 프레임 디자인: 강지수</h4>
                {/* <img src={Home_frame40} className="Home_frame40" alt="Home_frame"></img> */}
                {/* <img src={Home_frame60} className="Home_frame60" alt="Home_frame"></img> */}
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