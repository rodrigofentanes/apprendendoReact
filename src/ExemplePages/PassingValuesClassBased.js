import { Component } from 'react';

class PassingValuesClassBased extends Component {
    render() {
        return <>
            My name is {this.props.name} and my age is {this.props.age}. 
        </>      
    }
};

export default PassingValuesClassBased;