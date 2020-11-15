import React, { Component } from "react";

class StateComponent extends Component {
    state = {
        person: [
            {name:'max', age: 28},
            {name:'manu', age: 55},
            {name:'gabis', age: 44}
        ],
        shit: 'some shit'
    }

    render(){
        return <p>
            {this.name}
        </p>
    }
}

export default StateComponent;