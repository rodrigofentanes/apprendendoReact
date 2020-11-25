import { Component } from 'react';

class ReRenderStateDOM extends Component {
    state = {
        persons: [
            {name:'Julius', age:28},
            {name:'Louie', age:22},
            {name:'Julian', age:43}
        ]
    }

    refreshPage = () => {
        window.location.reload(false);
    }

    switchNamehandler = () => {
        // DEBUG LIKE THIS: console.log('switch name was clicked');
        // DON'T DO THIS: this.state.persons[0].name = 'FullHouse';
        this.setState({
            persons: [
                {name:'FullHouse', age:28},
                {name:'Barthos', age:22},
                {name:'Ferdnand', age:43}
            ]
        })
    }

    switchAgehandler = () => {
        // DEBUG LIKE THIS: console.log('switch age was clicked');
        // DON'T DO THIS: 
        this.setState({
            persons: [
                {age:66},
                {age:101},
                {age:14}
            ]
        })
    }

    render() {
        return <>
            My name is <b>{this.state.persons[0].name}</b> and my age is <b>{this.state.persons[0].age}</b>. <br/> 
            My name is <b>{this.state.persons[1].name}</b> and my age is <b>{this.state.persons[1].age}</b>. <br/> 
            My name is <b>{this.state.persons[2].name}</b> and my age is <b>{this.state.persons[2].age}</b>. <br/>
            <button onClick={this.switchNamehandler}>Click here to change all names</button> <br/>
            <button onClick={this.switchAgehandler}>Click here to change all ages <br/> See here one interesting and wrong behavior</button> <br/>
            <button onClick={this.refreshPage}>Click here to refresh page and restart values</button> <br/>
        </>      
    }
};

export default ReRenderStateDOM;