import {Component} from 'react';
import { UsingExternalMethodManipulating } from './UsingExternalMethodManipulating';

export default class ArrayManipulation extends Component {

    state = {
        data: [
            {id: "1",propertie: (<> <b>First:</b> <p>first orignal propertie</p> </>), aux: "first original aux"},
            {id: "2",propertie: (<> <b>Second:</b> <p>second orignal propertie</p> </>), aux: "second original aux"},
            {id: "3",propertie: (<> <b>Third:</b> <p>third original propertie</p> </>), aux: "third original aux"}
        ]
    }

    refreshPage = () => {
        window.location.reload(false);
    }

    deleteDataHandler = (anyDataIndex) => {
        // -> const data = this.state.data; // this is not the best way because this mutate the data
        // -> const data = this.state.data.slice(); // this is safer than the last way // slice without argument simply create a copy of the full array
        const data = [...this.state.data]; // this is the modern and "correct" way because create an "array copy"
        // remove item
        data.splice(anyDataIndex, 1);
        //update state
        this.setState({
            data: data
        });
    }

    nameChangedHandler = (event, id) => {
        // findIndex() method returns the index of the first element in an array that pass a test (provided as a function). 
        const capturedDataIndex = this.state.data.findIndex( d => {
            return d.id === id;
        });

        // const data = this.state.data[personIndex] // This way mutate the object
        // const data = Object.assign({}, this.state.data[anyDataIndex]); // this is the older aproach

        // this is the modern way
        const dataAux = {
            ...this.state.data[capturedDataIndex]
        }

        // 
        dataAux.propertie = event.target.value;

        const finalData = [...this.state.data];
       
        finalData[capturedDataIndex] = dataAux;

        this.setState({data: finalData})
    }

    render() {

        return (<>            
            <p>
                {
                    this.state.data.map( (anyOneName, anyIndexName) => {
                        return <>
                            <UsingExternalMethodManipulating 
                                propertie={anyOneName.propertie}
                                aux={anyOneName.aux}
                                delete={() => this.deleteDataHandler(anyIndexName)}
                                key={anyOneName.id}
                                changed={(event) => this.nameChangedHandler(event, anyOneName.id)}
                            ></UsingExternalMethodManipulating>
                        </>
                    })
                }
            </p>
            
            <button onClick={this.refreshPage}>Click here to refresh page and restart values</button> 
        </>)
    }
};