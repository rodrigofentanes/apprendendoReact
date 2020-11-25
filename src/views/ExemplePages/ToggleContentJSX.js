import {Component} from 'react';
import { UsingExternalMethod } from './UsingExternalMethod';

export default class ToggleContentJSX extends Component {

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

        // we can use all statements here.

        return (<>
            {/* We cannot use block statements here (inside JSX), so nothing of "if" statements for exemple */}
            <button onClick={this.togglePersonsHandler}>Toggle button</button> <br/>

            {
                // Ternary operator looks like { condition ? if true do it : if false do it }
                // Bellow, do "this.state.showData" or do "this.state.showData === true" is almost like the same thing.
                this.state.showData ? 
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
                : 
                    <p><b>The condition returned false so there's nothing to see here.</b></p>
            }
            
            <button onClick={this.refreshPage}>Click here to refresh page and restart values</button> 
        </>)
    }
    
};