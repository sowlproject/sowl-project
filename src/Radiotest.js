import React, { Component } from "react";
import "./Frame.scss";
export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectValue: "Black"
        };
    }
    handleChange = (e) => {
        console.log(`*****handleChange*****`);
        console.log(`선택한 값 : ${e.target.value}`);
        this.setState({
            selectValue: e.target.value
        });
    };

    render() {
        console.log(`*****render*****`);
        console.log(`this.state.selectValue : ${this.state.selectValue}`);

        return (
            <div className="radio">
                <input id="Black" value="Black" name="black" type="radio" className="inputradio"
                    checked={this.state.selectValue === "Black"}
                    onChange={this.handleChange}/>
                <input id="Navy" value="Navy" name="black" type="radio" className="inputradio"
                    checked={this.state.selectValue === "Navy"}
                    onChange={this.handleChange}/>
                <input id="SKHU" value="SKHU" name="black" type="radio" className="inputradio"
                    checked={this.state.selectValue === "SKHU"}
                    onChange={this.handleChange}/>
                <input id="YellowGreen" value="YellowGreen" name="black" type="radio" className="inputradio"
                    checked={this.state.selectValue === "YellowGreen"}
                    onChange={this.handleChange}/>
            </div>
        );
    }
}
