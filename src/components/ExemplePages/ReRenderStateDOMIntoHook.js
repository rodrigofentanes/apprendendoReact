import { useState } from 'react';

export const ReRenderStateDOMIntoHook = props => {

    const refreshPage = () => {
        window.location.reload(false);
    }

    // ! Here we don't destructure the receiver stateArray 
    // const stateArray = useState({
    //     persons: [
    //         {name:'FullHouse', age:18},
    //         {name:'Barthos', age:22},
    //         {name:'Ferdnand', age:43}
    //     ]
    // });

    // ? Here we destructure the receiving constant 
    // inside the destructured array we can use any name that we chose
    const [ personsState, setPersonsState ] = useState({
        persons: [
            {name:'Ray', age:18},
            {name:'Bob', age:22},
            {name:'Chris', age:43}
        ]
    });

    const switchNamehandler = () => {
        setPersonsState({
            persons: [
                {name:'Scyper', age: personsState.persons[0].age},
                {name:'Mouse', age: personsState.persons[1].age},
                {name:'Tank', age: personsState.persons[2].age}
            ]
        })
    };

    const switchAgehandler = () => {
        setPersonsState({
            persons: [
                {name: personsState.persons[0].name, age:66},
                {name: personsState.persons[1].name, age:101},
                {name: personsState.persons[2].name, age:14}
            ]
        })
    };

    return <>
        My name is <b>{personsState.persons[0].name}</b> and my age is <b>{personsState.persons[0].age}</b>. <br/> 
        My name is <b>{personsState.persons[1].name}</b> and my age is <b>{personsState.persons[1].age}</b>. <br/> 
        My name is <b>{personsState.persons[2].name}</b> and my age is <b>{personsState.persons[2].age}</b>. <br/>
        <button onClick={switchNamehandler}>Click here to change all names</button> <br/>
        <button onClick={switchAgehandler}>Click here to change all ages<br/>Here's the correct behavior that this button should have</button> <br/>
        <button onClick={refreshPage}>Click here to refresh page and restart values</button> <br/> 
    </>
};