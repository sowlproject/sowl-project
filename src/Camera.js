import React, { useRef } from "react";
import Webcam from "react-webcam";
import "./Camera.scss";
import { Link } from "react-router-dom";
import imageSet from "./App";

const videoConstraints = {
    width: 421,
    height: 268,
    facingMode: "environment"
};
let num = -1;

const Camera = () => {
    const webcamRef = useRef(null);
    const [url, setUrl] = React.useState(null);
    const capturePhoto_1 = React.useCallback(async () => {
        if (num === 7) return; num++;
        const imageTmp = webcamRef.current.getScreenshot({ width: 421, height: 268 });
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

    return (
        <div className="CameraDiv">
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
            <button className="shutter" onClick={capturePhoto_1}>Capture</button>
            {/* <button onClick={() => setUrl(null)}>Refresh</button> */}
            {url && (
                // <div id="photoboard" alt="Screenshot">
                //     <div>
                //         <img src={capture[0]} alt="Screenshot" width="192px" height="108px" />
                //     </div>
                //     <div>
                //         <img src={capture[1]}alt="Screenshot" width="240px" height="135px" />
                //     </div>
                //     <div>
                //         <img src={capture[2]}alt="Screenshot" width="240px" height="135px"/>
                //     </div>
                //     <div>
                //         <img src={capture[3]} alt="Screenshot" width="240px" height="135px"/>
                //     </div>
                //     <div>
                //         <img src={capture[4]} alt="Screenshot" width="240px" height="135px"/>
                //     </div>
                //     <div>
                //         <img src={capture[5]}alt="Screenshot" width="240px" height="135px"/>
                //     </div>
                //     <div>
                //         <img src={capture[6]}alt="Screenshot" width="240px" height="135px"/>
                //     </div>
                //     <div>
                //         <img src={capture[7]} alt="Screenshot" width="240px" height="135px"/>
                //     </div>
                // </div>
                <div id="check_photosel">
                    <div className="check_sel" id="check_sel1">
                        <p className="check_num" id="check_num1">
                            <img src={imageSet[0]} className="check_cnv" id="check_cnv1" width="240px" height="135px" alt="Screenshot" /></p>
                    </div>
                    <div className="check_sel" id="check_sel2">
                        <p className="check_num" id="check_num2">
                            <img src={imageSet[1]} className="check_cnv" id="check_cnv2" width="240px" height="135px" alt="Screenshot" /></p>
                    </div>
                    <div className="check_sel" id="check_sel3">
                        <p className="check_num" id="check_num3">
                            <img src={imageSet[2]} className="check_cnv" id="check_cnv3" width="240px" height="135px" alt="Screenshot" /></p>
                    </div>
                    <div className="check_sel" id="check_sel4">
                        <p className="check_num" id="check_num4">
                            <img src={imageSet[3]} className="check_cnv" id="check_cnv4" width="240px" height="135px" alt="Screenshot" /></p>
                    </div>
                    <div className="check_sel" id="check_sel5">
                        <p className="check_num" id="check_num5">
                            <img src={imageSet[4]} className="check_cnv" id="check_cnv5" width="240px" height="135px" alt="Screenshot" /></p>
                    </div>
                    <div className="check_sel" id="check_sel6">
                        <p className="check_num" id="check_num6">
                            <img src={imageSet[5]} className="check_cnv" id="check_cnv6" width="240px" height="135px" alt="Screenshot" /></p>
                    </div>
                    <div className="check_sel" id="check_sel7">
                        <p className="check_num" id="check_num7">
                            <img src={imageSet[6]} className="check_cnv" id="check_cnv7" width="240px" height="135px" alt="Screenshot" /></p>
                    </div>
                    <div className="check_sel" id="check_sel8">
                        <p className="check_num" id="check_num8">
                            <img src={imageSet[7]} className="check_cnv" id="check_cnv8" width="240px" height="135px" alt="Screenshot" /></p>
                    </div>
                </div>
            )}
            <Link to="/Select">go to Select</Link>
        </div>
    );
};

export default Camera;