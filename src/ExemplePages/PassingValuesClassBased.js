import React, { Component } from 'react';

class PassingValuesClassBased extends Component {
    render() {
        return <p>
            <p>My name is {this.props.name} and my age is {this.props.age}.</p> 
        </p>      
    }
};

export default PassingValuesClassBased;