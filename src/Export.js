import {React, useCallback, useContext, useState } from 'react';
import { Link } from "react-router-dom";
//import imgbbUploader from "imgbb-uploader";
import QRCode from "react-qr-code";
import imageSelected4 from "./App";
import ExportButton from './ExportButton.js';
import { createCanvas, loadImage } from 'canvas';
import AppContext from './AppContext';


let url = "";

async function mergeImages(imageDataArray) {
  const canvas = createCanvas();
  const positions = 30 + 268;
  // Load all images and get their dimensions
  const images = await Promise.all(imageDataArray.map(loadImage));
  const widths = images.map((image) => image.width);
  const heights = images.map((image) => image.height);

  // Calculate the total dimensions of the merged image
  const totalWidth = widths.reduce((acc, cur) => acc + cur);
  const maxHeight = Math.max(...heights);
  canvas.width = 480;
  canvas.height = 1440;

  // Draw each image onto the canvas at the appropriate position
  const context = canvas.getContext('2d');
  let x = 0;
  let y = 0;
  let gan_list = [30, positions, positions-0.1, positions-0.9, 0] 
  let i=0;
  for (const image of images) {
    context.drawImage(image, x, y);
    if(x == 0) x = 37.5;
    y += gan_list[i++]
  }

  // Convert the merged image to a Base64 encoded string
  const mergedImage = canvas.toDataURL();
  return mergedImage;
}

 let options = {
     apiKey: "46cc197df26dbf3d3caf8c1a71605bd4",
     expiration: 15552000,
     base64string: "",
};




let isTrue = false;
let tmp ;
function Export() {
  const myContext = useContext(AppContext);

  function Qrtest(url) {
    return (
        <div style={{ background: 'white', padding: '16px' }}>
            <br></br><br></br><br></br><br></br>
        <QRCode 
        size={256}
        style={{ height: "auto", maxWidth: "10%", width: "100%" }}
        value={url}
        viewBox={`0 0 256 256`}/>
        </div>
    );
}
  function test3(){
    if(!isTrue)
      return null;
    else return tmp;

  }

  async function test2(t){
    mergeImages(t).then((mergedImage) => {
      url = mergedImage;
      options.base64string = url;
      //document.getElementsByClassName('test').src = mergedImage;
      console.log("완료.");
      let form = new FormData();
      form.append("image", url.substring(22));
      fetch('https://api.imgbb.com/1/upload?key=46cc197df26dbf3d3caf8c1a71605bd4', {
        method: 'post',
        body: form})
      .then(res => res.json())
      .then(res=> {isTrue = true; tmp = Qrtest(res["data"].url); forceUpdate();})

  })}

  const [ ,test] = useState();
  //test(myContext.imageSelected4);
  const forceUpdate = useCallback(() => test({}), []);

  test2(myContext.imageSelected4);

    return (
        <div className="FrameDiv">
          <img src = {url} className='test'/>
          <div>{test3()}</div>
          {/* <button className="exportButton" onClick={()=>{test2(myContext.imageSelected4);}}>
    출력
    </button> */}
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