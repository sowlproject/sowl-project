import React from "react";
//const imgbbUploader = require("imgbb-uploader");
import QRCode from "react-qr-code";
import imageSelected4 from "./App";
//API KEY: 46cc197df26dbf3d3caf8c1a71605bd4
//API URL: https://api.imgbb.com/1/upload
//API Documentation: https://api.imgbb.com/ , https://www.npmjs.com/package/imgbb-uploader

const options = {
    apiKey: "46cc197df26dbf3d3caf8c1a71605bd4",
    expiration: 15552000,
    base64string: {resultprops},
};

function Qrtest() {
    return (
        <div style={{ background: 'white', padding: '16px' }}>
            <br></br><br></br><br></br><br></br>
        <QRCode 
        size={256}
        style={{ height: "auto", maxWidth: "10%", width: "100%" }}
        value={"https://i.ibb.co/yqMdqKS/Group-27.png"}
        viewBox={`0 0 256 256`}/>
        </div>
    );
}
imgbbUploader(options)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));

function Export() {
    return (
        <div className="FrameDiv">
        </div>
    );
}

export default Export;
