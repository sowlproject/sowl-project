import React from "react";

const mergeImages = require('merge-images');
const { Canvas, Image } = require('canvas');
const fs = require('fs');
const positions = 30 + 421;
mergeImages([{ src: './body.png', x: 0, y: 0 }, { src: './first.png', x: 37.5, y:38 }, { src: './second.png', x: 37.5, y:38 +positions }, { src: './third.png', x: 37.5, y:38 +positions*2 }, { src: './fin.png', x: 37.5, y:38 +positions*3 },],{
    Canvas: Canvas,
    Image: Image
})
.then(b64 => fs.writeFileSync("test.txt", b64));



