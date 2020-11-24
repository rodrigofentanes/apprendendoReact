import { Component } from 'react';

class StatePropertie extends Component {
    //this is one JS object
    state = {
        persons: [
            {name:'Julius', age:28},
            {name:'Louie', age:22},
            {name:'Julian', age:43},
        ]
    }

    render() {
        return <>
            My name is <b>{this.state.persons[0].name}</b> and my age is <b>{this.state.persons[0].age}</b>. <br/> 
            My name is <b>{this.state.persons[1].name}</b> and my age is <b>{this.state.persons[1].age}</b>. <br/> 
            My name is <b>{this.state.persons[2].name}</b> and my age is <b>{this.state.persons[2].age}</b>. <br/> 
        </>      
    }
};

export default StatePropertie;