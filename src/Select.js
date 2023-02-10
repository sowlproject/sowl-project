import "./Select.scss";
// import "./Frame.scss";
import Frame_base_1 from "./img/Frame_base_1.png";
import CaptureImg from "./img/CaptureImg.png";


function Frame() {
  return<img src={Frame_base_1}  alt="frame" className="frameImgPreview" />
}

function SelectNum() {
  return(
    <div className="circle"><span>1</span></div>
    // 1 부분을 number로 바꾸어 주고 동적으로 해야할 것.
  )
}

function ImgList() {
  function select(obj) {
    const rootElement = document.getElementById(obj);
    const elemet = React.createElement("SelectNum");
    ReactDOM.render(elemet, rootElement); // (주입할 대상, root) -> 자바스크립트로 따지면 append()
  }
  return(
    <table className="ImageTable">
      <tbody>
        <tr>
          <td id="select1" onClick={select(this.id)}><img src={CaptureImg} alt="exampleImg" className="captureImg" id="img1"/><SelectNum></SelectNum></td>
          <td id="select2"><img src={CaptureImg} alt="exampleImg" className="captureImg" id="img2"/></td>
        </tr>
        <tr>
          <td id="select3"><img src={CaptureImg} alt="exampleImg" className="captureImg" id="img3"/></td>
          <td id="select4"><img src={CaptureImg} alt="exampleImg" className="captureImg" id="img4"/></td>
        </tr>
        <tr>
          <td id="select5"><img src={CaptureImg} alt="exampleImg" className="captureImg" id="img5"/></td>
          <td id="select6"><img src={CaptureImg} alt="exampleImg" className="captureImg" id="img6"/></td>
        </tr>
        <tr>
          <td id="select7"><img src={CaptureImg} alt="exampleImg" className="captureImg" id="img7"/></td>
          <td id="select8"><img src={CaptureImg} alt="exampleImg" className="captureImg" id="img8"/></td>
        </tr>
      </tbody>
    </table>
  )
}

function Select() {
  return(
    <div className="bodyDiv">
      <h1 className="title">사진을 선택해주세요</h1>
      <div className="centerContainer">
        <Frame></Frame>
        <ImgList></ImgList>
      </div>
    </div>
  )
}

export default Select;