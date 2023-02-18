import {React, useContext, useState} from 'react';
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

function MyComponent() {
  const [clickedCells, setClickedCells] = useState(Array(8).fill(false));
  const [cellNumbers, setCellNumbers] = useState(Array(8).fill(null));

  const handleCellClick = (cellIndex) => {
    setClickedCells((prevState) => {
      const newState = [...prevState];
      newState[cellIndex] = true;
      return newState;
    });
    setCellNumbers((prevState) => {
      const newState = [...prevState];
      newState[cellIndex] = getUniqueNumber();
      return newState;
    });
  };

  const handleSaveButtonClick = () => {
    const selectedImages = [];
    for (let i = 0; i < clickedCells.length; i++) {
      if (clickedCells[i]) {
        selectedImages.push({
          cellIndex: i,
          imageUrl: '...' // 이미지의 URL을 저장
        });
      }
    }
    console.log(selectedImages);
  };

  const getUniqueNumber = () => {
    const usedNumbers = cellNumbers.filter((number) => number !== null);
    const availableNumbers = [1, 2, 3, 4].filter((number) => !usedNumbers.includes(number));
    if (availableNumbers.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableNumbers.length);
      return availableNumbers[randomIndex];
    } else {
      return null;
    }
  };

  return (
    <div>
      <table className="ImageTable">
        <tbody>
          <tr>
            <td onClick={() => handleCellClick(0)}>
              <img src={imageSet[0]} alt="..." className="captureImg" />
              <div style={{ display: "inline-block" }}>{cellNumbers[0]}</div>
            </td>
            <td onClick={() => handleCellClick(1)}>
              <img src={imageSet[1]} alt="..." className="captureImg" />
              <div style={{ display: "inline-block" }}>{cellNumbers[1]}</div>
            </td>
          </tr>
          <tr>
            <td onClick={() => handleCellClick(2)}>
              <img src={imageSet[2]} alt="..." className="captureImg" />
              <div style={{ display: "inline-block" }}>{cellNumbers[2]}</div>
            </td>
            <td onClick={() => handleCellClick(3)}>
              <img src={imageSet[3]} alt="..." className="captureImg" />
              <div style={{ display: "inline-block" }}>{cellNumbers[3]}</div>
            </td>
          </tr>
          <tr>
            <td onClick={() => handleCellClick(4)}>
              <img src={imageSet[4]} alt="..." className="captureImg" />
              <div style={{ display: "inline-block" }}>{cellNumbers[4]}</div>
            </td>
            <td onClick={() => handleCellClick(5)}>
              <img src={imageSet[5]} alt="..." className="captureImg" />
              <div style={{ display: "inline-block" }}>{cellNumbers[5]}</div>
            </td>
          </tr>
          <tr>
            <td onClick={() => handleCellClick(6)}>
              <img src={imageSet[6]} alt="..." className="captureImg" />
              <div style={{ display: "inline-block" }}>{cellNumbers[6]}</div>
            </td>
            <td onClick={() => handleCellClick(7)}>
              <img src={imageSet[7]} alt="..." className="captureImg" />
              <div style={{ display: "inline-block" }}>{cellNumbers[7]}</div>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleSaveButtonClick}>Save</button>
    </div>
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
        <MyComponent></MyComponent>
        {/* <ImgList></ImgList> */}
      </div>
    </div>
  )
}

export default Select;