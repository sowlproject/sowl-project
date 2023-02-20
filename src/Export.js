import {React, useCallback, useContext, useState } from 'react';
//import imgbbUploader from "imgbb-uploader";
import QRCode from "react-qr-code";
import './Export.scss';
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
      apiKey: "7514ac23daba5620cd83413e8253c7bb",
     // ba1dced7f7a5a06a7ae41877e8b24d50 여분의 api key
      expiration: 15552000, // 만료기한 변경x.
      base64string: "",
};


let justOne = 0;

let isTrue = false;
let tmp ;
function Export() {
  const myContext = useContext(AppContext);

  function Qrtest(url) {
    return (
        <div className='qrcodeDiv'>
        <QRCode 
        size={256}
        style={{ height: "auto", maxWidth: "10%", width: "100%" }}
        value={url}
        viewBox={`0 0 256 256`}
        />
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
      fetch('https://api.imgbb.com/1/upload?key=7514ac23daba5620cd83413e8253c7bb', {
        // ba1dced7f7a5a06a7ae41877e8b24d50 여분의 api key
        method: 'post',
        body: form})
      .then(res => res.json())
      .then(res=> {isTrue = true; tmp = Qrtest(res["data"].url); forceUpdate();})

  })}

  const [ ,test] = useState();
  //test(myContext.imageSelected4);
  const forceUpdate = useCallback(() => test({}), []);


  if (isTrue == 0 ) {
    test2(myContext.imageSelected4);
    justOne++;    
  }

  function done() {
    window.location.replace("/Home");
  }


    return (
        <div className="FrameDiv">
          <h1 className="title">사진이 완성되었어요!</h1>
          <img src = {url} className='exportImg'/>
          {test3()}
          <div className='QRcodebg'></div>
          <h1 className="qrCaption">QR코드를 촬영하여 사진을<br>
          </br>다운로드하실 수 있습니다.<br>
          </br>&#40;제한시간: 10분&#41;<br>
          </br>사진은 해상도를 위해 <br>
          </br>480x1440으로 저장됩니다.</h1>
          <div className='ExportBgFrame1'>
              <BgFrame></BgFrame>
          </div>
          <div className='ExportBgFrame2'>
              <BgFrame></BgFrame>
          </div>
          <div onClick={done}><ExportButton></ExportButton></div>
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