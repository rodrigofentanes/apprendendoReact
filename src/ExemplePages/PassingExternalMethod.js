import {Component} from "react";
import { UsingExternalMethod } from "../ExemplePages/UsingExternalMethod";

export default class PassingExternalMethod extends Component {

    refreshPage = () => {
        window.location.reload(false);
    }

    state = {
        data: [
            {propertie:"first orignal propertie", aux:"first original aux"},
            {propertie:"second orignal propertie", aux:"second original aux"}
        ]
    }

    switchDataPropertie = () => {
        this.setState({
            data: [
                {propertie:"first changed propertie", aux: this.state.data[0].aux},
                {propertie:"second changed propertie", aux: this.state.data[1].aux}
            ]
        })
    };

    render() {
        return (<>
        This is the:<b> {this.state.data[0].propertie} </b>  and my aux is<b> {this.state.data[0].aux} </b>. <br/>  
        This is the:<b> {this.state.data[1].propertie} </b>  and my aux is<b> {this.state.data[1].aux} </b>. <br/> 
        <button onClick={this.switchDataPropertie}>Change properties</button> <br/>
        <UsingExternalMethod click={this.switchDataPropertie}></UsingExternalMethod> <br/>
        <button onClick={this.refreshPage}>Click here to refresh page and restart values</button> <br/> 
    </>)
    }
    
};