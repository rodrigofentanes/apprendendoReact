import { Component } from "react";
import { TextInput } from '../../assets/css/Styling';

export default class SearchBar extends Component {

    // ! THIS IS THE SAME THAN THIS !
    // onInputChange(event) {
    //     console.log(event.target.value); // with this code we can see the event handler listening the input value
    // }

    state = {
        term: '',
    }

    // look this lessons bellow to understand "this" properties and the "state undefined error"
    // https://www.udemy.com/course/react-redux/learn/lecture/12531282 // Understanding "this"
    // https://www.udemy.com/course/react-redux/learn/lecture/12531284 // Solving context issues
    onFormSubmit = e => {
        e.preventDefault(); // this code prevents page reload before hit the enter on input tag
        //we need to use "this" when we are using class-based components 
        this.props.onSubmit(this.state.term);
    }

    render(){
        return<>
        <form onSubmit={this.onFormSubmit}> {/* passing data to parent PuttingAllTogether */}
            <label>Search:</label>
            {/* 
                ! THIS IS THE SAME THAN THIS !
                If we want, we can call the method inside a function, to do it we need to make a arrow function, so:
                <input type="text" onChange={(event) => console.log(event.target.value)} />
                we can replace the "event" by "e"
            */}
            <input 
                type="text"
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value })} 
                style={TextInput} 
                placeholder="Search here..."
            ></input>
        </form>
            
        </>
    }    
}