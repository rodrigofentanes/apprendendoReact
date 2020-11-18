import {Component} from "react";
import { UsingExternalMethod } from "./UsingExternalMethod";

export default class ToggleContentJS extends Component {

    refreshPage = () => {
        window.location.reload(false);
    }

    state = {
        data: [
            {propertie: "first orignal propertie", aux: "first original aux"},
            {propertie: "second orignal propertie", aux: "second original aux"}
        ],
        showData: false
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showData;
        this.setState({
            showData: !doesShow
        });
    }

    render() {

        let viewExemple = null;

        if (this.state.showData) {
            viewExemple = (
                <>
                    <UsingExternalMethod 
                    propertie={this.state.data[0].propertie}
                    aux={this.state.data[0].aux}
                    ><b>First:</b></UsingExternalMethod>
                    
                    <UsingExternalMethod 
                    propertie={this.state.data[1].propertie}
                    aux={this.state.data[1].aux}
                    ><b>Second:</b></UsingExternalMethod>
                </>
            );
        }else{
            viewExemple = (
                <>
                    <b>The condition returned false so there's nothing to see here.</b>
                </>
            )  
        }

        return (<>
            <button onClick={this.togglePersonsHandler}>Toggle button</button> <br/>
            
            <p>{viewExemple}</p>
            
            <button onClick={this.refreshPage}>Click here to refresh page and restart values</button> 
        </>)
    }
    
};