import {React, useCallback, useContext, useState} from 'react';
import ReactDOM from 'react-dom/client';
import "./Select.scss";
import "./Frame.scss";
import "./bgFrame.scss";
import imageSet from "./App";
import imageSelected4 from "./App";
import selectedFrame from "./App"; // 고친부분("./App" --> "./Frame")
import Frame0 from "./img/Frame_black_480.png";
import Frame1 from "./img/Frame_navy_480.png";
import Frame2 from "./img/Frame_skhu_480.png";
import Frame3 from "./img/Frame_yellowgreen_480.png";
import AppContext from './AppContext';

function frameNum(selectedFrame) {
  if (selectedFrame === 0) {
    return Frame0;
  }
  else if (selectedFrame === 1) {
    return Frame1;
  }
  else if (selectedFrame === 2) {
    return Frame2;
  }
  else {
    return Frame3;
  }
}

function Frame() {
  const myContext = useContext(AppContext);
  return <img src={frameNum(myContext.FValue)} alt="frame" className="frameImgPreview" />
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

function SelectNum(data) {
  return (
    <div className="circle"><span>{data}</span></div>
    // 1 부분을 number로 바꾸어 주고 동적으로 해야할 것.
  )
}

function ImgList() {
function select(id, num) {
  const rootElement = document.getElementById(id);
  const elemet = React.createElement("SelectNum");
  ReactDOM.render(elemet, rootElement); // (주입할 대상, root) -> 자바스크립트로 따지면 append()
}
  return (
    <table className="ImageTable">
      <tbody>
        <tr>
          <td onClick={() => select(this.id, 0)}><img src={imageSet[0]} alt="exampleImg" className="captureImg" id="img1" /></td>
          <td onClick={() => select(this.id, 1)}><img src={imageSet[1]} alt="exampleImg" className="captureImg" id="img2" /></td>
        </tr>
        <tr>
          <td onClick={() => select(this.id, 2)}><img src={imageSet[2]} alt="exampleImg" className="captureImg" id="img3" /></td>
          <td onClick={() => select(this.id, 3)}><img src={imageSet[3]} alt="exampleImg" className="captureImg" id="img4" /></td>
        </tr>
        <tr>
          <td onClick={() => select(this.id, 4)}><img src={imageSet[4]} alt="exampleImg" className="captureImg" id="img5" /></td>
          <td onClick={() => select(this.id, 5)}><img src={imageSet[5]} alt="exampleImg" className="captureImg" id="img6" /></td>
        </tr>
        <tr>
          <td onClick={() => select(this.id, 6)}><img src={imageSet[6]} alt="exampleImg" className="captureImg" id="img7" /></td>
          <td onClick={() => select(this.id, 7)}><img src={imageSet[7]} alt="exampleImg" className="captureImg" id="img8" /></td>
        </tr>
      </tbody>
    </table>
  )
}

function ImgTable() {
  const [selectedImageIndex, setSelectedImageIndex] = useState([]);
  const [ ,test] = useState();
  const forceUpdate = useCallback(() => test({}), []);
  const handleImageClick = (index) => () => {
    if(selectedImageIndex.includes(index))
      selectedImageIndex.splice(selectedImageIndex.indexOf(index));
    else if(selectedImageIndex.length < 4)
      selectedImageIndex.push(index);
    forceUpdate();
    console.log(selectedImageIndex);
  }

  const renderNumber = (n) => {
    if(selectedImageIndex.indexOf(n) >= 0){
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, background: 'white' }}>
        <p>{selectedImageIndex.indexOf(n) + 1}</p>
      </div>
    );
    }
    else{
      return (
      <div style={{ position: 'absolute', top: 0, left: 0, background: 'white' }}>
        <p>
        </p>
      </div>
    );
    }
  }

  const handleSaveClick = () => {
    if (selectedImageIndex !== null) {
      console.log(`이미지 ${selectedImageIndex + 1}이 저장되었습니다.`);
    }
  }

  return (
    <table className="ImageTable">
      <tbody>
        <tr>
          <td style={{ position: 'relative' }}>
            <img src={imageSet[0]} onClick={handleImageClick(0)} value className="captureImg0" />
            {renderNumber(0)}
          </td>
          <td style={{ position: 'relative' }}>
            <img src={imageSet[1]} onClick={handleImageClick(1)} className="captureImg1" />
            {renderNumber(1)}
          </td>
        </tr>
        <tr>
          <td style={{ position: 'relative' }}>
            <img src={imageSet[2]} onClick={handleImageClick(2)} className="captureImg2" />
            {renderNumber(2)}
          </td>
          <td style={{ position: 'relative' }}>
            <img src={imageSet[3]} onClick={handleImageClick(3)} className="captureImg3" />
            {renderNumber(3)}
          </td>
        </tr>
        <tr>
          <td style={{ position: 'relative' }}>
            <img src={imageSet[4]} onClick={handleImageClick(4)} className="captureImg4" />
            {renderNumber(4)}
          </td>
          <td style={{ position: 'relative' }}>
            <img src={imageSet[5]} onClick={handleImageClick(5)} className="captureImg5" />
            {renderNumber(5)}
          </td>
        </tr>
        <tr>
          <td style={{ position: 'relative' }}>
            <img src={imageSet[6]} onClick={handleImageClick(6)} className="captureImg6" />
            {renderNumber(6)}
          </td>
          <td style={{ position: 'relative' }}>
            <img src={imageSet[7]} onClick={handleImageClick(7)} className="captureImg7" />
            {renderNumber(7)}
          </td>
        </tr>
      </tbody>
      <div>
        <button onClick={handleSaveClick}>저장</button>
      </div>
    </table>
  );
}

function Select() {
  const myContext = useContext(AppContext);

  return (
    <div className="bodyDiv">
      <div className='selectBgFrame1'>
        <BgFrame></BgFrame>
      </div>
      <div className='selectBgFrame2'>
        <BgFrame></BgFrame>
      </div>
      <h1 className="title">{myContext.FValue}</h1>
      <h2 className='tiltle2'></h2>
      <div className="centerContainer">
        <Frame></Frame>
        <ImgTable></ImgTable>
        {/* <ImgList></ImgList> */}
      </div>
    </div>
  )
}

export default Select;