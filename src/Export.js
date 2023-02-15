import React from "react";
import { Link } from "react-router-dom";
import "./Frame.scss";
const imgbbUploader = require("imgbb-uploader");
//API KEY: 46cc197df26dbf3d3caf8c1a71605bd4
//API URL: https://api.imgbb.com/1/upload
//API Documentation: https://api.imgbb.com/ , https://www.npmjs.com/package/imgbb-uploader

const options = {
    apiKey: "46cc197df26dbf3d3caf8c1a71605bd4", // MANDATORY
    imagePath: "./your/image/path", // OPTIONAL: pass a local file (max 32Mb)
    name: "yourCustomFilename", // OPTIONAL: pass a custom filename to imgBB API
    expiration: 15552000 /* OPTIONAL: pass a numeric value in seconds.
    It must be in the 60-15552000 range.
    Enable this to force your image to be deleted after that time. */,
    imageUrl: "https://placekitten.com/500/500", // OPTIONAL: pass an URL to imgBB (max 32Mb)
    base64string:
        "iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAEklEQVR42mNcLVNbzwAEjDAGACcSA4kB6ARiAAAAAElFTkSuQmCC",
    // OPTIONAL: pass base64-encoded image (max 32Mb)
};

imgbbUploader(options)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));

function sendPost(options) {
    imgbbUploader(options)
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
    
}

function Export() {
    return (
        <div className="FrameDiv">
        </div>
    );
}

export default Export;
