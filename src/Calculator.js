import React from 'react';
import './CalculatorStyle.css';

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            operation: "",
            registerOne: "",
            registerTwo: "",
            currentRegister: "1"
        };

        this.clearExpressionWindow = this.clearExpressionWindow.bind(this);
        this.numberOnClick = this.numberOnClick.bind(this);
        this.operationOnClick = this.operationOnClick.bind(this);
        this.equalsOnClick = this.equalsOnClick.bind(this);
    }

    clearExpressionWindow(){
        this.setState({
            operation: null,
            registerOne: "",
            registerTwo: "",
            currentRegister: "1"
        })
    }

    numberOnClick(event){
        if(this.state.currentRegister === "1"){
            this.setState({
                registerOne: this.state.registerOne += event.target.value
            });
        } else {
            this.setState({
                registerTwo: this.state.registerTwo += event.target.value
            });
        }
    }

    operationOnClick(event){
        if(this.state.registerOne !== ""){
            var temp = 0;
            if(this.state.registerTwo !== ""){
                switch(this.state.operation){
                    case "+":
                        temp = parseInt(this.state.registerOne) + parseInt(this.state.registerTwo);
                        break;
                    case "-":
                        temp = parseInt(this.state.registerOne) - parseInt(this.state.registerTwo);
                        break;
                    case "/":
                        temp = parseInt(this.state.registerOne) / parseInt(this.state.registerTwo);
                        break;
                    case "x":
                        temp = parseInt(this.state.registerOne) * parseInt(this.state.registerTwo);
                        break;
                    default:
                        break;
                }
            }
    
            if(temp === 0){
                this.setState({
                    operation: event.target.value,
                    registerTwo: "",
                    currentRegister: "2"
                });
            } else {
                this.setState({
                    operation: event.target.value,
                    registerOne: temp,
                    registerTwo: "",
                    currentRegister: "2"
                });
            }
        }
    }

    equalsOnClick(){
        if(this.state.registerOne !== ""){
            var temp;
            if(this.state.operation === "+") temp = parseInt(this.state.registerOne) + parseInt(this.state.registerTwo);
            else if(this.state.operation === "-") temp = parseInt(this.state.registerOne) - parseInt(this.state.registerTwo);
            else if(this.state.operation === "/") temp = parseInt(this.state.registerOne) / parseInt(this.state.registerTwo);
            else if(this.state.operation === "x") temp = parseInt(this.state.registerOne) * parseInt(this.state.registerTwo);

            this.setState({
                registerOne: temp,
                registerTwo: "",
                currentRegister: "2"
            });
        }
    }

    render(){
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="4">
                                <label id="expression-window" type="text">{(this.state.registerTwo === "") ? this.state.registerOne : this.state.registerTwo}</label>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="button" value="/" onClick={this.operationOnClick}/></td>
                            <td><input type="button" value="x" onClick={this.operationOnClick}/></td>
                            <td><input type="button" value="+" onClick={this.operationOnClick}/></td>
                            <td><input type="button" value="-" onClick={this.operationOnClick}/></td>
                        </tr>
                        <tr>
                            <td><input type="button" value="1" onClick={this.numberOnClick}/></td>
                            <td><input type="button" value="2" onClick={this.numberOnClick}/></td>
                            <td><input type="button" value="3" onClick={this.numberOnClick}/></td>
                            <td><input type="button" value="C" onClick={this.clearExpressionWindow}/></td>
                        </tr>
                        <tr>
                            <td><input type="button" value="4" onClick={this.numberOnClick}/></td>
                            <td><input type="button" value="5" onClick={this.numberOnClick}/></td>
                            <td><input type="button" value="6" onClick={this.numberOnClick}/></td>
                            <td><input type="button" value="%"/></td>
                        </tr>
                        <tr>
                            <td><input type="button" value="7" onClick={this.numberOnClick}/></td>
                            <td><input type="button" value="8" onClick={this.numberOnClick}/></td>
                            <td><input type="button" value="9" onClick={this.numberOnClick}/></td>
                            <td><input type="button" value="+/-"/></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><input type="button" value="0" onClick={this.numberOnClick}/></td>
                            <td><input type="button" value="." onClick={this.numberOnClick}/></td>
                            <td><input type="button" value="=" onClick={this.equalsOnClick}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Calculator;