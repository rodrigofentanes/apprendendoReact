import {Component, bind} from "react";
import { TwoWayBindForm } from "./TwoWayBindForm";

export default class TwoWayBind extends Component {

    refreshPage = () => {
        window.location.reload(false);
    }

    state = {
        data: [
            {propertie: "first original propertie", aux: "first original aux"},
            {propertie: "second original propertie", aux: "second original aux"}
        ]
    }

    switchDataPropertie = (newPropertie) => {
        this.setState({
            data: [
                {propertie: newPropertie, aux: this.state.data[0].aux},
                {propertie: newPropertie, aux: this.state.data[1].aux}
            ]
        })
    };

    nameChangedHandler = (event) => {
        this.setState({
            data: [
                {propertie: event.target.value, aux: this.state.data[0].aux},
                {propertie: this.state.data[1].propertie, aux: this.state.data[1].aux}
            ]
        })
    }

    render() {
        return (<>
        This is the:<b> {this.state.data[0].propertie} </b>  and my aux is<b> {this.state.data[0].aux} </b>. <br/>  
        This is the:<b> {this.state.data[1].propertie} </b>  and my aux is<b> {this.state.data[1].aux} </b>. <br/><br/>
        <TwoWayBindForm 
        propertie={this.state.data[0].propertie}
        click={this.switchDataPropertie.bind(this, "I'm binded")} 
        changed={this.nameChangedHandler} 
        > 
            Change first propertie data (type here):
        </TwoWayBindForm> <br/> 
        <button onClick={() => this.switchDataPropertie("I'm passed by an anonymous function")}>Change properties</button> <br/>
        <button onClick={this.refreshPage}>Click here to refresh page and restart values</button> 
    </>)
    }
    
};