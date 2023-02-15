import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

//ReactDOM.render(<QRCode value="hey" />, document.getElementById("Container"));

export default function Qrtest() {
    return (
        <div style={{ background: 'white', padding: '16px' }}>
            <br></br><br></br><br></br><br></br>
        <QRCode 
        size={256}
        style={{ height: "auto", maxWidth: "10%", width: "100%" }}
        value={"https://i.ibb.co/1skjxw3/page2.png"}
        viewBox={`0 0 256 256`}/>
        </div>
    );
}

