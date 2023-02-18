import React from "react";
import mergeImages from 'merge-images';
const fs = require('fs');
const path = require('path');
import frame from "./img/Frame_black_480.png";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";

//이미지 머지는 만들다가 말았으니 이어서 제작하거나 그냥 다 지우고 만드셔도 됩니다 ...ㅠ

fs.writeFile(path.join(__dirname, 'result.png'), b64Data, 'base64', err => {
    if (err) console.log(err);
});

// const images = [
//     //첫 번째 이미지들
//     { src: 'selectedframeImg1', x: 0, y: 0 },
//     { src: 'img1', x: 20, y: 30 },
//     { src: 'img2', x: 20, y: 330 },
//     { src: 'img3', x: 20, y: 630 },
//     { src: 'img4', x: 20, y: 930 },
//     //반복되는 두번 째 레이어들
//     { src: 'selectedframeImg2', x: 480, y: 0 },
//     { src: 'img1', x: 500, y: 30 },
//     { src: 'img2', x: 500, y: 330 },
//     { src: 'img3', x: 500, y: 630 },
//     { src: 'img4', x: 500, y: 930 },
// ]

// mergeImages = await mergeImages(images, {
//     width: 960,
//     height: 1440, //이미지 프레임 사이즈 설정, 960 1440 전체크기.
// });




const mergeImages = require('merge-images');
const { Canvas, Image } = require('canvas');
const fs = require('fs');
const positions = 30 + 421;
mergeImages([{ src: './frame.png', x: 0, y: 0 }, { src: './first.png', x: 37.5, y:38 }, { src: './second.png', x: 37.5, y:38 +positions }, { src: './third.png', x: 37.5, y:38 +positions*2 }, { src: './fin.png', x: 37.5, y:38 +positions*3 },],{
    Canvas: Canvas,
    Image: Image
})
.then(b64 => fs.writeFileSync("test.txt", b64));

