import React, { useRef } from "react";
import Webcam from "react-webcam";
import "./Camera.scss";
import { Link } from "react-router-dom";
import imageSet from "./App";
import NextButton from './nextButton.js';
import ShutterSoundMP3 from './audio/shutterSound.mp3';

const videoConstraints = {
    width: 405,
    height: 268,
    facingMode: "environment"
};

let num = -1;
let shutNum = 0;

const Camera = () => {

    const webcamRef = useRef(null);
    const [url, setUrl] = React.useState(null);
    const capturePhoto_1 = React.useCallback(async () => {
        
        if (num === 7) {alert("8장 모두 촬영되었습니다. 다음 버튼을 눌러주세요!");document.documentElement.requestFullscreen();return;} num++;
        const imageTmp = webcamRef.current.getScreenshot({ width: 405, height: 268 });
        imageSet[num] = imageTmp;
        setUrl(imageSet[num]);
        setNumber(prevNumber => prevNumber + 1);
        // var image = document.createElement('img');
        // image.innerHTML = capture[num];
        // image.appendChild(capture[num]);
    }, [webcamRef]);

    const onUserMedia = (e) => {
        console.log(e);
    };
    const [number, setNumber] = React.useState(0);

    const shutterSound = new Audio(ShutterSoundMP3);

    const play = () => {
        if(shutNum <= 7){
            shutterSound.play();
            shutNum++;
        }
    }

    const keyDown = e => {
        if(e.key === "ArrowDown"){
            capturePhoto_1(); 
            play();
        }
    }

    return (
        <div className="CameraDiv" onKeyDown={keyDown}>
            <Webcam className="Webcam"
                ref={webcamRef}
                audio={false} // 오디오 설정 false = mute
                screenshotFormat="image/jpeg" // 저장 확장자 설정 image/jpeg, image/png, image/webp, image/heic
                forceScreenshotSourceSize={true} // 캡쳐화면 크기 설정 = videoConstraints와 동일하게 설정
                videoConstraints={videoConstraints}
                onUserMedia={onUserMedia}
                screenshotQuality={1} // 캡쳐화질 설정 0 ~ 1
            // mirrored={false} // 좌우반전 여부 설정 기본값:false
            />
            <h1 className="counter">{number}/8</h1>
            <button className="shutter" id="shutterButton" autoFocus onClick={() => {capturePhoto_1(); play()}}></button>
            {/* <button onClick={() => setUrl(null)}>Refresh</button> */}
            {url && (
                <div id="check_photosel">
                    <div className="prevCameraImgCaption">이전에 찍은 사진이에요</div>
                    <div className="prevCameraImg">
                        <img src={imageSet[num]} className="prevCameraImgSC" alt="Screenshot" />
                    </div>
                </div>
            )}
            <div className='cameraBgFrame1'>
                <BgFrame></BgFrame>
            </div>
            <div className='cameraBgFrame2'>
                <BgFrame></BgFrame>
            </div>
            <div className="containerMent">
                <div className="guideMent">화면이 나올 때까지 기다려주세요<br></br><br></br>셔터 버튼이나 리모컨을 눌러서 찍을 수 있어요!</div>
            </div>
            <Link to="/Select"><NextButton></NextButton></Link>
        </div>
    );
};

function BgFrame() {
    return (
        <div className='bgFrame'>
            <div className='bgFrameSC'></div>
            <div className='bgFrameSC'></div>
            <div className='bgFrameSC'></div>
        </div>
    )
}

export default Camera;