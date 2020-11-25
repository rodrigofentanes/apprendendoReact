import {Component} from 'react';
import { UsingExternalMethod } from './UsingExternalMethod';

export default class ValueToFunction extends Component {

    refreshPage = () => {
        window.location.reload(false);
    }

    state = {
        data: [
            {propertie: "first orignal propertie", aux: "first original aux"},
            {propertie: "second orignal propertie", aux: "second original aux"}
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

    render() {
        return (<>
        This is the:<b> {this.state.data[0].propertie} </b>  and my aux is<b> {this.state.data[0].aux} </b>. <br/>  
        This is the:<b> {this.state.data[1].propertie} </b>  and my aux is<b> {this.state.data[1].aux} </b>. <br/>
        <button onClick={() => this.switchDataPropertie("I'm passed by an anonymous function")}>Change properties</button> <br/>
        {/* these "this" inside the bind method refers to the function "switchDataPropertie" */}
        <UsingExternalMethod click={this.switchDataPropertie.bind(this, "I'm binded")}></UsingExternalMethod> <br/> 
        <button onClick={this.refreshPage}>Click here to refresh page and restart values</button> 
    </>)
    }
    
};