import React, { Component } from "react";

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
            <div className="App">
                <br></br><br></br><br></br><br></br><br></br>
                <input id="Black" value="Black" name="platform" type="radio"
                    checked={this.state.selectValue === "Black"}
                    onChange={this.handleChange}/>Black
                <input id="Navy" value="Navy" name="platform" type="radio"
                    checked={this.state.selectValue === "Navy"}
                    onChange={this.handleChange}/> Navy
                <input id="SKHU" value="SKHU" name="platform" type="radio"
                    checked={this.state.selectValue === "SKHU"}
                    onChange={this.handleChange}/>SKHU
                <input id="YellowGreen" value="YellowGreen" name="platform" type="radio"
                    checked={this.state.selectValue === "YellowGreen"}
                    onChange={this.handleChange}/>YellowGreen
            </div>
        );
    }
}
