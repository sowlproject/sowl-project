import React from "react";
//const imgbbUploader = require("imgbb-uploader");
import QRCode from "react-qr-code";
import imageSelected4 from "./App";
import ExportButton from './ExportButton.js';
//API KEY: 46cc197df26dbf3d3caf8c1a71605bd4
//API URL: https://api.imgbb.com/1/upload
//API Documentation: https://api.imgbb.com/ , https://www.npmjs.com/package/imgbb-uploader
// IMGBB_API_KEY = "46cc197df26dbf3d3caf8c1a71605bd4";
// async function uploadImage(imagePath) {
//   try {
//     const response = await imgbbUploader(process.env.IMGBB_API_KEY, imagePath);
//     console.log(response);
//     // Log the image URL that was returned from imgbb.com
//     console.log(response.url);
//   } catch (error) {
//     console.error(error);
//   }
// }

// uploadImage('./FinalImage/*');
// function imgToBase64ByFileReader(url) {
//     return new Promise((resolve, reject) => {
//       let xhr = new XMLHttpRequest();
//       xhr.onload = () => {
//         let reader = new FileReader();
//         reader.onloadend = function () {
//           resolve(reader.result);
//           console.log(reader.result);
//           document.getElementById('logo').setAttribute('src', reader.result);
//         }
//         reader.readAsDataURL(xhr.response);
//       }
//       xhr.open('GET', url);
//       xhr.responseType = 'blob';
//       xhr.send();
//     });
//   }

// var resultprops = imgToBase64ByFileReader('./img/Frame_base_1.png');
// const options = {
//     apiKey: "46cc197df26dbf3d3caf8c1a71605bd4",
//     expiration: 15552000,
//     base64string: {resultprops},
// };

// function Qrtest() {
//     return (
//         <div style={{ background: 'white', padding: '16px' }}>
//             <br></br><br></br><br></br><br></br>
//         <QRCode 
//         size={256}
//         style={{ height: "auto", maxWidth: "10%", width: "100%" }}
//         value={"https://i.ibb.co/yqMdqKS/Group-27.png"}
//         viewBox={`0 0 256 256`}/>
//         </div>
//     );
// }
// imgbbUploader(options)
//     .then((response) => console.log(response))
//     .catch((error) => console.error(error));

function Export() {
    return (
        <div className="FrameDiv">



          <ExportButton></ExportButton>
          <div className='ExportBgFrame1'>
              <BgFrame></BgFrame>
          </div>
          <div className='ExportBgFrame2'>
              <BgFrame></BgFrame>
          </div>
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

export default Export;
