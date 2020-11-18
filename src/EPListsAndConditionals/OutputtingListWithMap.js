import {Component} from "react";
import { UsingExternalMethod } from "./UsingExternalMethod";

export default class OutputtingListWithMap extends Component {

    refreshPage = () => {
        window.location.reload(false);
    }

    state = {
        data: [
            {propertie: (<> <b>First:</b> <p>first orignal propertie</p> </>), aux: "first original aux"},
            {propertie: (<> <b>Second:</b> <p>second orignal propertie</p> </>), aux: "second original aux"},
            {propertie: (<> <b>Third:</b> <p>third original propertie</p> </>), aux: "third original aux"}
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
                    {this.state.data.map( anyOneName => {
                        return <>
                            <UsingExternalMethod 
                            propertie={anyOneName.propertie}
                            aux={anyOneName.aux}
                            ></UsingExternalMethod>
                        </>
                    })}
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