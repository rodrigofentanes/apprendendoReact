import React, { useState } from 'react';

import { TextInput } from '../../assets/css/Styling';

// https://www.udemy.com/course/react-redux/learn/lecture/12531282 // Understanding "this"
// https://www.udemy.com/course/react-redux/learn/lecture/12531284 // Solving context issues
export const SearchBar = ({ onFormSubmit }) => {
    
    const [term, setTerm] = useState('');

    const onInputChange = (e) => {
        setTerm(e.target.value);
    }
    
    
    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(term);
    }

    return<>
        <form onSubmit={onSubmit}>
            <label>Search:</label>
            <input 
                type="text"
                value={term}
                onChange={onInputChange} 
                style={TextInput} 
                placeholder="Search here..."
            ></input>
        </form>
    </>
}