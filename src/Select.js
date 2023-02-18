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

function ImgTable() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageNumbers, setImageNumbers] = useState({});
  
  const handleImageClick = (event) => {
    const tdElement = event.target.closest("td");
    const tdIndex = Array.from(tdElement.parentNode.children).indexOf(tdElement) + 1;
    
    if (selectedImages.length < 4 && !imageNumbers[tdIndex]) {
      const newSelectedImages = [...selectedImages];
      newSelectedImages.push(event.target.src);
      setSelectedImages(newSelectedImages);
      
      const newImageNumbers = {...imageNumbers};
      newImageNumbers[tdIndex] = selectedImages.length + 1;
      setImageNumbers(newImageNumbers);
    }
  };
  
  const handleDeleteClick = (index) => {
    const newSelectedImages = [...selectedImages];
    newSelectedImages.splice(index, 1);
    setSelectedImages(newSelectedImages);
    
    const newImageNumbers = {...imageNumbers};
    for (let key in newImageNumbers) {
      if (newImageNumbers[key] > index) {
        newImageNumbers[key] -= 1;
      }
      if (newImageNumbers[key] === index + 1) {
        delete newImageNumbers[key];
      }
    }
    setImageNumbers(newImageNumbers);
  };
  
  const renderNumber = (tdIndex) => {
    if (imageNumbers[tdIndex]) {
      return (
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          {imageNumbers[tdIndex]}
          <button onClick={() => handleDeleteClick(imageNumbers[tdIndex] - 1)}>
            X
          </button>
        </div>
      );
    }
    return null;
  };
  
  const renderTable = () => {
    const table = [];
    for (let i = 0; i < 2; i++) {
      const children = [];
      for (let j = 0; j < 4; j++) {
        const tdIndex = i * 4 + j + 1;
        children.push(
          <td key={tdIndex} onClick={handleImageClick}>
            <img src={`image${tdIndex}.jpg`} alt={`Image ${tdIndex}`} />
            {renderNumber(tdIndex)}
          </td>
        );
      }
      table.push(<tr key={i}>{children}</tr>);
    }
    return <table><tbody>{table}</tbody></table>;
  };
  
  const renderSelectedImages = () => {
    return (
      <div>
        <p>Selected Images:</p>
        {selectedImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Selected Image ${index + 1}`} />
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <div>
      {renderTable()}
      {renderSelectedImages()}
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
        <ImgTable></ImgTable>
        {/* <ImgList></ImgList> */}
      </div>
    </div>
  )
}

export default Select;