
import { Paragraph } from '../components/Paragraph/Paragraph';

import JsInsideJsx  from '../components/ExemplePages/JsInsideJsx';
import FunctionalComponent from '../components/ExemplePages/FunctionalComponent';
import OtherComponent from '../components/ExemplePages/OtherComponent';
import ClassBasedComponent  from '../components/ExemplePages/ClassBasedComponent';
import PassingValuesFunctional from '../components/ExemplePages/PassingValuesFunctional';
import ChildrenComponent from '../components/ExemplePages/ChildrenComponent';
import StatePropertie from '../components/ExemplePages/StatePropertie';
import ReRenderStateDOM from '../components/ExemplePages/ReRenderStateDOM';
import { ReRenderStateDOMIntoHook } from '../components/ExemplePages/ReRenderStateDOMIntoHook';
import PassingExternalMethod from '../components/ExemplePages/PassingExternalMethod';
import ValueToFunction from '../components/ExemplePages/ValueToFunction';
import TwoWayBind from '../components/ExemplePages/TwoWayBind';
import CssInlineStyle from '../components/ExemplePages/CssInlineStyle';

import ToggleContentJSX from '../components/EPListsAndConditionals/ToggleContentJSX';
import ToggleContentJS from '../components/EPListsAndConditionals/ToggleContentJS';
import OutputtingListWithMap from '../components/EPListsAndConditionals/OutputtingListWithMap';
import ArrayManipulation from '../components/EPListsAndConditionals/ArrayManipulation';
import Geolocation from '../components/EPListsAndConditionals/Geolocation';

import UserCommentList from '../components/AdvancedConcepts/UserCommentList';
import PuttingAllTogether from '../components/AdvancedConcepts/PuttingAllTogether';

// ALLOWED ITEMS
// title: '',
// body: [],
//  //   chapter: '',
//  //   explanation:<></>,
//  //   code: ``,
//  //   result:<></>,
//  //   note:<></>,

const items = [
    {
        title:'Introducing React',
        body: [
            {
                chapter:'Whats Is React?'
            },
            {
                explanation:<>
                    <p>React is a <u>JS Library</u> for building <u>User Interfaces</u>.</p>
                    <p>This user interfaces is build throught <u>components</u>.</p>
                    <p>All React activity happens on the browser.</p>
                </>
            },
            {
                chapter:'Generating a React Project'
            },
            {
                explanation:<>
                    <p>The recommended method for generating a project is now:</p>
                </>
            },
            {
                code:`
                npx create-react-app myapp
                `
            },
            {
                explanation:<>
                    <p>The old way have two steps:</p>
                </>
            },
            {
                code:`
                npm install -g create-react-app


                create-react-app myapp
                `
            },
            {
                note:<>
                    <p>
                        If you get any errors about missing templates or how a global Create React App install is no longer supported even 
                        when using this command, you likely need to remove the global package from your system:
                    </p>
                </>
            },
            {
                code:`
                npm uninstall -g create-react-app
                `
            },
            {
                note:<>
                    <p>If you is in one linux distro you will need to do some steps more to complete delete:</p>
                </>
            },
            
            {
                code:`
                rm -rf /usr/local/bin/create-react-app
                `
            },
            {
                note:<>
                    <p>If you want to know more about, access the site: <a href="https://github.com/facebook/create-react-app" target="_blank" title="click here and go to the page">https://github.com/facebook/create-react-app</a>.</p>
                </>
            },
            {
                chapter:'Cloned Project'
            },
            {
                explanation:<>
                    <p>If you are cloning a git project, you need to do:</p>
                </>
            },
            {
                code:`
                npm i

                
                // OR //


                yarn install
                `
            },
        ]
    },
    {  
        title:'Depedency',
        body: [
            {
                chapter:'Whats is a Depedency?'
            },
            {
                explanation:<>
                    <p>...</p>
                </>
            },
            {
                chapter:'Babel (Dependency)'
            },
            {
                explanation:<>
                    <p>
                        React uses different versions of JavaScript, so the preprocessor <b>Babel </b> 
                        is required to compile and run the code within any brownser.
                    </p>
                    <p>We can enter in <a href="https://babeljs.io/" target="_blank" title="click here and go to the page">babel</a> website and click on <b>try it</b> to check the code and see how it looks like after be converted.</p>
                    <p>Babel converts the JSX code too.</p>
                </>
            },
            {
                chapter:'Webpack (Dependency)'
            },
            {
                explanation:<>
                    <p>...</p>
                </>
            },
            {
                chapter:'Dev Server (Dependency)'
            },
            {
                explanation:<>
                    <p>...</p>
                </>
            },
        ]
    },
    {
        title:'Understanding Project Directories',
        body: [
            {
                explanation:<>
                    <p><b>src: </b>Folder where we put all the source code we write.</p>
                    <p><b>public: </b>Folder that stores static files, like images.</p>
                    <p><b>node_modules: </b>Folder that contains all of ou project dependencies.</p>
                    <p><b>package.json: </b>Records our project dependencies and configures our project.</p>
                    <p><b>package.lock: </b>Records the exact version of packages that we install.</p>
                    <p><b>README.md: </b>Instructions on how to use this project.</p>
                </>
            },
            {
                chapter:'Other types of directories (patterns)'
            },
            {
                explanation:<>
                    <p><b>assets: </b>Folder that stores ...</p>
                    <p><b>components: </b>Folder that stores...</p>
                    <p><b>helpers: </b>Folder that stores ...</p>
                    <p><b>hooks: </b>Folder that stores...</p>
                    <p><b>service: </b>Folder that stores...</p>
                    <p><b>views: </b>Folder that stores...</p>
                </>
            },
        ]
    },
    {
        title:'Running a npm/yarn server',
        body: [
            {
                explanation:<>
                    <p>To start a server we need to put into the terminal:</p>
                </>
            },
            {
                code:`
                npm start

                
                // OR //


                yarn start
                `
            },
            {
                note:<>
                    <p>Execute this code above inside the project folder.</p>
                    <p>We can access the site on port <a href="http://localhost:3000/" target="_blank" title="click here and go to the page">http://localhost:3000/</a> or we can use the port given by the server itself, it will look like <b>http://192.168.0.6/</b> and it pops up as soon as the server starts.</p>
                </>
            },
        ]
    },
    {
        title:'JSX',
        body: [
            {
                explanation:<>
                    <p>The JSX allows us to use "HTML" syntax inside our code.</p>
                </>
            },
            {
                note:<>
                    <p>The special dialect of JSX is JavaScript code, its not HTML!</p>
                </>
            },
            {
                note:<>
                    <p>Brownser don't understad JSX code! We write JSX then run tools to turn it into normal JS.</p>
                </>
            },
            {
                note:<>
                    <p>Very similar in form and function to HTML with a couple differences.</p>
                </>
            },
            {
                explanation:<>
                    <p>JSX is a special JS <u>syntax extension</u> that produces react <u>elements</u>. Its use is optional, so react donsn't require it.</p>
                </>
            },
            {
                chapter:'JSX restrictions'
            },
            {
                explanation:<>
                    <ul>
                        <li>
                            <p>The attribute "class" is not allowed, therefore we will use the attribute "className".</p>
                        </li>
                        <li>
                            <p>The attribute "for" is not allowed, therefore we will use the attribute "htmlFor".</p>
                        </li>
                        <li>
                            <p>React permits only one root element per component.</p>
                        </li>
                    </ul>
                </>
            },
            {
                chapter:'JSX Interpolation'
            },
            {
                explanation:<>
                    <p>We need to use curly braces {"{ }"} to use JS within the JSX:</p>
                </>
            },
            {
                code:`
                const jsInsideJsx = () => {
    
                    function refreshPage(){
                        window.location.reload(false);
                    }
                
                    return <> 
                            <b>{Math.floor(Math.random()*2000)}</b> <br/>
                            <button onClick={refreshPage}>Click here to reload the page and change the number above</button>
                        </>
                }
                
                export default jsInsideJsx;
                `
            },
            {
                result:<JsInsideJsx/>
            },
            {
                note:<>
                    <p> The code to reload the page is interesting, it is worth looking at.</p>
                </>
            },
        ]
    },
    {
        title:'Component',
        body:[
            {
                explanation:<>
                    <p>
                        React Component is a function or a class that produces HTML throught JSX and show to the user. 
                        It handles feedback from the user throght the "Event Handler".
                    </p>
                    <ul>
                        <li>Component need the first letter as capital.</li>
                        <li>Component has to return the code to be rendered to the real DOM.</li>
                        <li>We must "wrap" the content inside component in one only tag like {"<div> </div>"}.</li>
                        <li>We can use empty tags like {"<> </>"} to wrap all content.</li>
                        <li><b>Nesting</b> tenet: One component can be show inside of another component.</li>
                        <li><b>Reusability</b> tenet: It is preferable that the component is reusable.</li>
                        <li><b>Configuration</b> tenet: We should be able to configure a component when it is created.</li>
                    </ul>
                    <p>When creating components, you have the choice between <b>two different ways</b>:</p>
                </>
            },
            {
                chapter:'Funtional components'
            },
            {
                explanation:<>
                    <p>Also referred to as "presentational", "dumb" or "stateless" components.</p> 
                    <p>Can produce JSX to show content to the user</p>
                    <p>Modern way:</p>
                </>
            },
            {
                code:`
                const functionalComponent = () => {
                    return <> some JSX </>
                };
                export default functionalComponent;
                `
            },
            {
                explanation:<>
                    <p>Old way:</p>
                </>
            },
            {
                code:`
                const functionalComponent = function() {
                    return <> some JSX </>
                };
                export default functionalComponent;
                `
            },
            {
                result:<FunctionalComponent/>
            },
            {
                chapter:'Other way to do one functional component'
            },
            {
                code:`
                function OtherComponent() {
                    return (
                      <>Some JSX code.</>
                    );
                  }
                
                export default OtherComponent;
                `
            },
            {
                result:<OtherComponent/>
            },
            {
                note:<>
                    <p> Hooks system, using function components, can use Hooks to access state system and update content on screen.</p>
                </>
            },
            {
                chapter:'Class-based components'
            },
            {
                explanation:<>
                    <p>Also referred to as "containers", "smart" or "stateful" components.</p>
                    <p>A Class-Based way is called "smart" because inside one class we can have variables and other interesting properties.</p>
                    <p>Can produce JSX to show content to the user.</p>
                    <p>Can use the Lifecycle Method system to run code at specific points in time.</p>
                    <p>Can use the 'state' system to update content on the screen.</p>
                </>
            },
            {
                code:`
                import { Component } from 'react';

                class ClassBasedComponent extends Component {
                    render() {
                    return <>Some JSX code.</>
                    }
                }

                export default ClassBasedComponent;
                `
            },
            {
                result:<ClassBasedComponent/>
            },
            {
                note:<>
                    <p> Hooks system, using function components, can produce JSX to show content to the user.</p>
                    <p> Hooks system, using function components, can use Hooks to run code at specific points in time.</p>
                    <p> Hooks system, using function components, can use Hooks to access state system and update content on screen.</p>
                </>
            },
            {
                chapter:'Basic component index page'
            },
            {
                code:`
                import React from 'react';
                import ReactDOM from 'react-dom';
                
                // Create a react compont
                const App = () => {
                    return <div>Hello!</div>;
                };
                
                // Take the react component and show it on the screen
                ReacDOM.render(
                    <App/>,
                    document.querySelector('#root')
                );
                `
            },
        ]
    },
    {
        title:'React-DOM',
        body: [
            {
                explanation:<>
                    <p>React-DOM renders the components to the real DOM.</p>
                    <p>ReactDOM is a react object, it allows us to call his methods.</p>
                </>
            },
            {
                chapter:'Render method'
            },
            {
                explanation:<>
                    <p>The render method allow us to render one componet isolated if we want. Everything inside the render method will be renderized.</p>
                </>
            },
        ]
    },
    {
        title:'Styling components',
        body: [
            {
                explanation:<>
                    <p>We will see two ways of styling implement. </p>
                    <p>The <b>first</b> way is create one css file and import it, see:</p>
                </>
            },
            {
                code:`
                import './PATH/TO/THE/CSS_FILE'
                `
            },
            {
                note:<>
                    <p>We can use single or double quotes to pass an style name but by convention we use single quotes.</p>
                    <p>We can easily make JSX reference to JS variables and we do it putting a JS code into a curly braces block.</p>
                </>
            },
            {
                explanation:<>
                    <p>The <b>second</b> way is called "Inline Style" and is usefull when we want to give style into one specific scope, see:</p>
                </>
            },
            {
                code:`
                import {Component} from 'react';

                export default class CssInlineStyle extends Component {

                    render() {
                        const ourStyle = {
                            backGroundColor: 'green',
                            font: 'inherit',
                            border: '3px solid red',
                            padding: '8px',
                            cursor: 'cell'
                        };

                        const buttonText = 'This is a inline stylized button';
                        
                        function getButtonText(){
                            return 'Click on me';
                        } 

                        return <>
                            <button style={ourStyle} >
                                {buttonText}
                            </button>
                            <br/>
                            <button style={ourStyle} >
                                {getButtonText()}
                            </button>
                        </>
                    }
                }
                `
            },
            {
                result:<CssInlineStyle></CssInlineStyle>
            },
        ]
    },
    {
        title:'Outputting basic dynamic content with "props"',
        body:[
            {
                explanation:<>
                    <p>We will need the argument "props" to manage all data. the props argument holds all properties of one component. Properties is the attributes that we have inside a component.</p>
                    <p> "props" allow you to pass data from a parent (wrapping) component to a child (embedded) component.</p>
                </>
            },
            {
                note:<>
                    <p>: the name "props" is chose by convention, but we can change the argument name "props" to any other name. </p>
                </>
            },
            {
                chapter:'Functional way'
            },
            {
                explanation:<>
                    <p>First we need to send data:</p>
                </>
            },
            {
                code:`
                <PassingValuesFunctional name="Rodrigo" age="30">This code inside this tag is not visible</PassingValuesFunctional>
                `
            },
            {
                explanation:<>
                    <p>Second we need to get the data:.</p>
                </>
            },
            {
                code:`
                const passingValuesFunctional = (props) => {
                    return <>
                        I'am {props.name} and I have {props.age} years old.
                    </>
                };
                
                export default passingValuesFunctional;
                `
            },
            {
                result:<PassingValuesFunctional name="Rodrigo" age="30">This code inside this tag is not visible</PassingValuesFunctional>
            },
            {
                chapter:'Class-Based way'
            },
            {
                code:`
                import { Component } from 'react';

                class PassingValuesClassBased extends Component {
                    render() {
                        return <>
                            My name is {this.props.name} and my age is {this.props.age}. 
                        </>      
                    }
                };

                export default PassingValuesClassBased;
                `
            },
            {
                result:<PassingValuesFunctional name="Rodrigo" age="30">This code inside this tag is not visible</PassingValuesFunctional>
            },
        ]
    },
    {
        title:'The "props.children" element',
        body:[
            {
                chapter:''
            },
            {
                explanation:<>
                    <p>We use {"{props.children}"} sintax to access the elements inside one component tag.</p>
                </>
            },
            {
                code:`
                const childrenComponent = (props) => {
                    return <>
                        {props.children}
                    </>
                }
                
                export default childrenComponent;
                `
            },
            {
                result:<ChildrenComponent>This code inside this tag is now visible.</ChildrenComponent>
            },
        ]
    },
    {
        title:'Understanding and using "state"',
        body:[
            {
                explanation:<>
                    <p>We create a Object when we do this bellow:</p>
                </>
            },
            {
                code:`
                const variable = { text: 'foo', otherPropertie: '123' };
                `
            },
            {
                explanation:<>
                <p>In exemple above "variable" receive a object.</p>
                <p>We can use "state" within class-based components or Hooks system. "state" is a JS object that contains relevant data to a component.</p>
                <p>Updatating "state" on a component causes the component to (almost) instantly rerender.</p>
                <p>"state" can only be update using the "setState" function.</p>
                <p>
                    The propertie "state" only can be used when we "extends" actual class/component to the "Component" class.
                    State must be used with care, because it can make the app unpredictable and hard to manage.
                </p>
                </>
            },
            {
                note:<>
                    <p>"state" is one reserved word. Its used to manage some internal data information.</p>
                </>
            },
            {
                note:<>
                    <p>the propertie state need to be inside one class. </p>
                </>
            },
            {
                note:<>
                    <p>the square brackets {"[ ]"} is used to open and close one array. </p>
                </>
            },
            {
                note:<>
                    <p>the word "this" refers to it own class. </p>
                </>
            },
            {
                note:<>
                    <p>"props"  and "state"  are CORE concepts of React. </p>
                </>
            },
            {
                note:<>
                    <p>Actually, only changes in "props" and/ or "state" trigger React to re-render your components and potentially update the DOM in the browser. </p>
                </>
            },
            {
                explanation:<>
                    <p>The basic code to use state is:</p>
                </>
            },
            {
                code:`
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
                `
            },
            {
                result:<StatePropertie/>
            },
            {
                chapter:'State Re-render propertie'
            },
            {
                explanation:<>
                    <p>The state is special because it can be changed and every state change leads the React to re-render the DOM. See bellow:</p>
                </>
            },
            {
                code:`
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
                `
            },
            {
                result:<ReRenderStateDOM/>
            },
            {
                note:<>
                    <p>The event "onclick" in normal HTML don't have a capital "C", but in JSX it have, so we write "onClick". This is used to execute dynamic code.</p>
                </>
            },
            {
                note:<>
                    <p>Don't use parenthesis when you want to make a reference. So, inside onClick, we only reference a function -- this.switchNameHandler -- and don't call it -- this.switchNameHandler( ) --.</p>
                </>
            },
            {
                note:<>
                    <p>See more supported event listeners in the link <a href="https://reactjs.org/docs/events.html#supported-events">React Supported Events</a></p>
                </>
            },
            {
                note:<>
                    <p>The word "this" within a function with parenthesis will make a reference to the class it is in and it will lead to many errors. Thats why we need to use an arrow funtion.</p>
                </>
            },
        ]
    },
    {
        title:'Evolving the code',
        body:[
            {
                explanation:<>
                    <p>From now on we can minimize declarations doing this tricks bellow.</p>
                </>
            },
            {
                chapter:'Exporting and importing constants'
            },
            {
                note:<>
                    <p>To export:</p>
                </>
            },
            {
                code:`
                export const ConstantName = () => {...};
                `
            },
            {
                note:<>
                    <p>To import:</p>
                </>
            },
            {
                code:`
                import { ConstantName } from './PATH/TO/THE/FILE';
                `
            },
            {
                chapter:'Exporting and importing functions'
            },
            {
                note:<>
                    <p>To export:</p>
                </>
            },
            {
                code:`
                export default function FunctionName(){...}
                `
            },
            {
                note:<>
                    <p>To import:</p>
                </>
            },
            {
                code:`
                import FunctionName from './PATH/TO/THE/FILE';
                `
            },
            {
                chapter:'Exporting and importing classes'
            },
            {
                note:<>
                    <p>To export:</p>
                </>
            },
            {
                code:`
                export default class ClassName extends Component {...};
                `
            },
            {
                note:<>
                    <p>To import:</p>
                </>
            },
            {
                code:`
                import ClassName from './PATH/TO/THE/FILE';
                `
            },
        ]
    },
    {
        title:'Introducing Hooks',
        body:[
            {
                explanation:<>
                    <p>React hooks is a collection of functions exposed to you by react which you can use in functional components.</p>
                    <p>All hook start with the word "use".</p>
                    <p>
                        For exemple, we can use the "useState( )" hook for state manipulation. It allow us to manage state in a function (component). 
                    </p>
                    <p>The hook "useState" always returns <b>one array</b> with exactly <b>two</b> elements:</p>            
                    <ol>
                        <li>The first aways be the "current state".</li><br/>
                        <li>
                            The second element in the state array will be a function that allows us to update this state,
                            such that React is aware of it and will re-render this component, as which the class-based components seen earlier.
                        </li>
                    </ol>
                </>
            },
            {
                code:`
                import { useState } from 'react';

                export const ReRenderStateDOMIntoHook = props => {

                    const refreshPage = () => {
                        window.location.reload(false);
                    }

                    // ! Here we don't destructure the receiver stateArray !
                    // const stateArray = useState({
                    //     persons: [
                    //         {name:'FullHouse', age:18},
                    //         {name:'Barthos', age:22},
                    //         {name:'Ferdnand', age:43}
                    //     ]
                    // });

                    // ! Here we destructure the receiving constant !
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
                `
            },
            {
                result:<ReRenderStateDOMIntoHook/>
            },
            {
                note:<>
                    <p>Here we use the "array destructuring" JS feature.</p>
                </>
            },
            {
                note:<>
                    <p>You can compare the before component ReRenderStateDOM with this component above, because this is a convertion of it into a hook.</p>
                </>
            },
            {
                note:<>
                    <p>Remember the strange behavior seen in the last exemple? Inside the code above we can see one way to fix this. Enjoy and have fun with the buttons.</p>
                </>
            },
        ]
    },
    {
        title:'Passing Methods',
        body:[
            {
                explanation:<>
                    <p>We can pass methods, also as props, to the child component.</p>
                    <p>Look this class-based component working:</p>
                </>
            },
            {
                code:`
                import {Component} from 'react';
                import { UsingExternalMethod } from '../ExemplePages/UsingExternalMethod';

                export default class PassingExternalMethod extends Component {

                    refreshPage = () => {
                        window.location.reload(false);
                    }

                    state = {
                        data: [
                            {propertie:"first orignal propertie", aux:"first original aux"},
                            {propertie:"second orignal propertie", aux:"second original aux"}
                        ]
                    }

                    switchDataPropertie = () => {
                        this.setState({
                            data: [
                                {propertie:"first changed propertie", aux: this.state.data[0].aux},
                                {propertie:"second changed propertie", aux: this.state.data[1].aux}
                            ]
                        })
                    };

                    render() {
                        return (<>
                        This is the:<b> {this.state.data[0].propertie} </b>  and my aux is<b> {this.state.data[0].aux} </b>. <br/>  
                        This is the:<b> {this.state.data[1].propertie} </b>  and my aux is<b> {this.state.data[1].aux} </b>. <br/> 
                        <button onClick={this.switchDataPropertie}>Change properties</button> <br/>
                        <UsingExternalMethod click={this.switchDataPropertie}></UsingExternalMethod> <br/>
                        <button onClick={this.refreshPage}>Click here to refresh page and restart values</button> <br/> 
                    </>)
                    }
                    
                };
                `
            },
            {
                code:`
                export const UsingExternalMethod = (props) => {
                    return (<>
                        <button onClick={props.click}>Using a parent method to change properties</button>
                    </>)
                };
                `
            },
            {
                result:<PassingExternalMethod></PassingExternalMethod>
            },
            {
                note:<>
                </>
            },
        ]
    },
    {
        title:'Passing Values to Functions',
        body:[
            {
                explanation:<>
                    <p>We can pass values to funtions usind the "bind" method or passing one anonyous function:</p>
                </>
            },
            {
                code:`
                import {Component, bind} from 'react';
                import { UsingExternalMethod } from './UsingExternalMethod';

                export default class ValueToFunction extends Component {

                    refreshPage = () => {
                        window.location.reload(false);
                    }

                    state = {
                        data: [
                            {propertie: "first orignal propertie", aux: "first original aux"},
                            {propertie: "second orignal propertie", aux: "second original aux"}
                        ]
                    }

                    switchDataPropertie = (newPropertie) => {
                        this.setState({
                            data: [
                                {propertie: newPropertie, aux: this.state.data[0].aux},
                                {propertie: newPropertie, aux: this.state.data[1].aux}
                            ]
                        })
                    };

                    render() {
                        return (<>
                        This is the:<b> {this.state.data[0].propertie} </b>  and my aux is<b> {this.state.data[0].aux} </b>. <br/>  
                        This is the:<b> {this.state.data[1].propertie} </b>  and my aux is<b> {this.state.data[1].aux} </b>. <br/>
                        <button onClick={() => this.switchDataPropertie("I'm passed by an anonymous function")}>Change properties</button> <br/>
                        {/* these "this" inside the bind method refers to the function "switchDataPropertie" */}
                        <UsingExternalMethod click={this.switchDataPropertie.bind(this, "I'm binded")}></UsingExternalMethod> <br/> 
                        <button onClick={this.refreshPage}>Click here to refresh page and restart values</button> 
                    </>)
                    }
                    
                };
                `
            },
            {
                code:`
                export const UsingExternalMethod = (props) => {
                    return (<>
                        <button onClick={props.click}>Using a parent method to change properties</button>
                    </>)
                };
                `
            },
            {
                result:<ValueToFunction></ValueToFunction>
            },
            {
                note:<>
                    <p> the "this" inside the bind method refers to the function "switchDataPropertie".</p>
                </>
            },
            {
                chapter:'Two way bind'
            },
            {
                code:`
                import {Component, bind} from 'react';
                import { TwoWayBindForm } from './TwoWayBindForm';
                
                export default class TwoWayBind extends Component {
                
                    refreshPage = () => {
                        window.location.reload(false);
                    }
                
                    state = {
                        data: [
                            {propertie: "first original propertie", aux: "first original aux"},
                            {propertie: "second original propertie", aux: "second original aux"}
                        ]
                    }
                
                    switchDataPropertie = (newPropertie) => {
                        this.setState({
                            data: [
                                {propertie: newPropertie, aux: this.state.data[0].aux},
                                {propertie: newPropertie, aux: this.state.data[1].aux}
                            ]
                        })
                    };
                
                    nameChangedHandler = (event) => {
                        this.setState({
                            data: [
                                {propertie: event.target.value, aux: this.state.data[0].aux},
                                {propertie: this.state.data[1].propertie, aux: this.state.data[1].aux}
                            ]
                        })
                    }
                
                    render() {
                        return (<>
                        This is the:<b> {this.state.data[0].propertie} </b>  and my aux is<b> {this.state.data[0].aux} </b>. <br/>  
                        This is the:<b> {this.state.data[1].propertie} </b>  and my aux is<b> {this.state.data[1].aux} </b>. <br/><br/>
                        <TwoWayBindForm 
                            propertie={this.state.data[0].propertie}
                            click={this.switchDataPropertie.bind(this, "I'm binded")} 
                            changed={this.nameChangedHandler} 
                        > 
                            Change first propertie data (type here):
                        </TwoWayBindForm> <br/>
                        <button onClick={() => this.switchDataPropertie("I'm passed by an anonymous function")}>Change properties</button> <br/>
                        <button onClick={this.refreshPage}>Click here to refresh page and restart values</button> 
                    </>)
                    }
                };
                `
            },
            {
                code:`
                export const TwoWayBindForm = (props) => {
                    return (<>
                        <label>{props.children}</label> <br/>
                        <input type="text" onChange={props.changed} value={props.propertie} /> <br/><br/>    
                        <button onClick={props.click}>Using a parent method to change properties</button>
                    </>)
                };
                `
            },
            {
                result:<TwoWayBind/>
            },
        ]
    },
    {
        title:'Lists and Conditionals',
        body:[
            {
                chapter:'Rendering content conditionally (JSX Interpolation)'
            },
            {
                explanation:<>
                    <p>Inside JSX code, we need to use curly braces to use conditionals to reder content conditionally.</p>
                    <p>
                        Inside the JSX syntax we only can use simple statements, no block statements is allowed. 
                        So, the "if" statement is not allowed inside the JSX syntax. 
                        Instead of it we can use ternary operators to write ternary expressions inside JSX code.
                    </p>
                    <p>
                        Outside the JSX code, we can use every JavaScript feature, including, of course, all conditional statements. 
                    </p>
                    <p>
                        In this case, in practice, this means that outside "return", including inside the render method, we can use JS code normally, 
                        but inside the "return" we only can use simple statements like ternary expressions.  
                    </p>
                </>
            },
            {
                code:`
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
                `
            },
            {
                code:`
                export const UsingExternalMethod = (props) => {
                    return (<>
                        <p>{props.children}</p>
                        <p>{props.propertie}</p>
                        <p>{props.aux}</p>
                    </>)
                };
                `
            },
            {
                result:<ToggleContentJSX/>
            },
            {
                note:<>
                    <p>
                        inside a component we can use normal functions and arrow functions, 
                        but normal function will create problems if we want to use the "this" keyword though 
                        and since we will call this method here upon event fired in the DOM, this would lead to real problems.
                        Use arrow functions ensures the "this" propertie always, under all circumstances, returns to it own class.
                    </p>
                </>
            },
            {
                note:<>
                     <p>
                        In REACT we always work with JavaScript, everything is JavaScript.
                    </p>
                </>
            },
            {
                note:<>
                     <p>
                        Curly braces is required to execute JS expressions.
                    </p>
                </>
            },
            {
                note:<>
                     <p>
                        Ternary operator looks like <b>{"{"} SomeCondition ? if true do it : if false do it {"}"} </b>.
                    </p>
                </>
            },
            {
                chapter:'Rendering content conditionally (JavaScript)'
            },
            {
                explanation:<>
                    <p>Using conditions off the JSX code can be a cleaner way.</p>
                </>
            },
            {
                code:`
                import {Component} from 'react';
                import { UsingExternalMethod } from './UsingExternalMethod';

                export default class ToggleContentJS extends Component {

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

                        let viewExemple = null;

                        if (this.state.showData) {
                            viewExemple = (
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
                            );
                        }else{
                            viewExemple = (
                                <>
                                    <b>The condition returned false so there's nothing to see here.</b>
                                </>
                            )  
                        }

                        return (<>
                            <button onClick={this.togglePersonsHandler}>Toggle button</button> <br/>
                            
                            <p>{viewExemple}</p>
                            
                            <button onClick={this.refreshPage}>Click here to refresh page and restart values</button> 
                        </>)
                    }
                    
                };
                `
            },
            {
                code:`
                export const UsingExternalMethod = (props) => {
                    return (<>
                        <p>{props.children}</p>
                        <p>{props.propertie}</p>
                        <p>{props.aux}</p>
                    </>)
                };
                `
            },
            {
                result:<ToggleContentJS/>
            },
            {
                chapter:'Outputting a list with map'
            },
            {
                code:`
                import {Component} from 'react';
                import { UsingExternalMethod } from './UsingExternalMethod';

                export default class OutputtingListWithMap extends Component {

                    refreshPage = () => {
                        window.location.reload(false);
                    }

                    state = {
                        data: [
                            {propertie: (<> <b>First:</b> <p>first orignal propertie</p> </>), aux: "first original aux"},
                            {propertie: (<> <b>Second:</b> <p>second orignal propertie</p> </>), aux: "second original aux"},
                            {propertie: (<> <b>Third:</b> <p>third original propertie</p> </>), aux: "third original aux"}
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

                        let viewExemple = null;

                        if (this.state.showData) {
                            viewExemple = (
                                <>
                                    {this.state.data.map( anyOneName => {
                                        return <>
                                            <UsingExternalMethod 
                                            propertie={anyOneName.propertie}
                                            aux={anyOneName.aux}
                                            ></UsingExternalMethod>
                                        </>
                                    })}
                                </>
                            );
                        }else{
                            viewExemple = (
                                <>
                                    <b>The condition returned false so there's nothing to see here.</b>
                                </>
                            )  
                        }

                        return (<>
                            <button onClick={this.togglePersonsHandler}>Toggle button</button> <br/>
                            
                            <p>{viewExemple}</p>
                            
                            <button onClick={this.refreshPage}>Click here to refresh page and restart values</button> 
                        </>)
                    }
                    
                };
                `
            },
            {
                code:`
                export const UsingExternalMethod = (props) => {
                    return (<>
                        <p>{props.children}</p>
                        <p>{props.propertie}</p>
                        <p>{props.aux}</p>
                    </>)
                };
                `
            },
            {
                result:<OutputtingListWithMap/>
            },
        ]
    },
    {
        title:'Array Manipulation',
        body:[
            {
                explanation:<>
                    <p>
                        We will need to know about <a href="https://www.w3schools.com/jsref/jsref_splice.asp" target="_blank" title="click here and go to the page">splice( )</a> method.
                    </p>
                    <p>
                        We will need to know about <a href="https://www.w3schools.com/jsref/jsref_map.asp" target="_blank" title="click here and go to the page">map( )</a> method.
                    </p>
                    <p>
                        We will need to know about <a href="https://www.w3schools.com/jsref/jsref_findindex.asp" target="_blank" title="click here and go to the page">findIndex( )</a> method.
                    </p>
                    <p>
                        The "key" prop is one important propertie you should add when render lists of data.
                        The key propertie allows React to keep track of individuals elements and render/change only specific data. 
                    </p>
                </>
            },
            {
                code:`
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
                        const capturedDataIndex = this.state.data.findIndex( d=>{
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
                `
            },
            {
                code:`
                export const UsingExternalMethodManipulating = (props) => {
                    return (<>
                        <p>{props.children}</p>
                        <p>{props.propertie}</p>
                        <p>{props.aux}</p>
                        <input 
                            type="text" onChange={props.changed} 
                            value={props.value}
                        ></input> <br/>
                        <button onClick={props.delete}>Delete this data</button>
                    </>)
                };
                `
            },
            {
                result:<ArrayManipulation/>
            },
        ]
    },
    {
        title:'Component Lifecycle',
        body:[
            {
                explanation:<>
                    <p>The lyfecycle components are part of the component they are in. These methods help to re-render specific things inside the component.</p>
                </>
            },
            {
                chapter:'Lifecycle Method'
            },
            {
                explanation:<>
                    <p><b>Constructor: </b>Good to do one-time setup.</p>
                    <p><b>Render: </b>Avoid doing anything besides returning JSX.</p>
                    <p><b>componentDidMount: </b>Good place to do data-loading!</p>
                    <p><b>componentDidUpdate: </b>Good place to do more data-loading when state/props change.</p>
                    <p><b>componentWillUnmount: </b>Good place to do cleanup (Especially for non-React stuff).</p>
                    <p><b>shouldComponentUpdate: </b>...</p>
                    <p><b>getDerivedStateFromProps: </b>...</p>
                    <p><b>getSnapshotBeforeUpdate: </b>...</p>
                </>
            },
        ]
    },
    {
        title:'Seasons (Geolocation API)',
        body:[
            {
                explanation:<>
                    <p>Here we will use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation" target="_blank" title="click here and go to the page">Geolocation API</a>.</p>
                    <p>We need to know about <a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation" target="_blank" title="click here and go to the page">Callback functions</a>.</p>
                    <p>Inside the Console, we can go to "sensors" option and change the browser geolocalization.</p>
                </>
            },
            {
                code:`
                import { Component } from "react";
                import { SeasonsDisplay } from "./SeasonDisplay";

                export default class Geolocation extends Component{

                    // SETTING 'STATE' HERE OR INSIDE THE CONSTRUCTOR IS THE SAME
                    // BABEL DEPENDENCY CONVERTS THIS CODE BELLOW IN A CONSTRUCTOR
                    state = {
                        lat: null,
                        long: null,
                        errorMessage: '',
                        time: '',
                    };

                    // it was part of lifecycle // this is the right way to do data-loading
                    componentDidMount(){
                        console.log('My component was just mounted!');

                        window.navigator.geolocation.getCurrentPosition(
                            // Here are two callbacks function
                            (position) => {
                                this.setState({
                                    lat: position.coords.latitude,
                                    long: position.coords.longitude,
                                })
                            },
                            (err) => {
                                this.setState({
                                    errorMessage: err.message,
                                })
                            }
                        );
                    }

                    // it was part of lifecycle
                    componentDidUpdate(){
                        console.log('My component was just update - it rerendered!');
                    }

                    renderContent() {
                        if(this.state.errorMessage && !this.state.lat) {
                            return <>
                                <p><b>Error Message:</b> {this.state.errorMessage} </p>
                            </>
                        }

                        if(!this.state.errorMessage && this.state.lat) {
                            return <>
                                <SeasonsDisplay
                                    lat={this.state.lat}
                                    long={this.state.long}
                                ></SeasonsDisplay>
                            </>
                        }

                        return <>
                            LOADING!
                        </>
                    }

                    render(){


                        return <>
                            {/* ! UNCOMMENT THIS TO SEE componentDidUpdate() WORKING ! */}
                            {/* <p><b>Local time is: </b>{this.state.time}</p> */}
                            {this.renderContent()}
                        </>
                    }
                }
                `
            },
            {
                code:`
                import '../../assets/css/SeasonDisplay.css';

                const seasonConfig = {
                    Summer: {
                        text: "Let's hit the beach!",
                    },
                    Winter: {
                        text: "Burr, it is chilly!",
                    },
                }

                const getSeason = (lat, month) => {
                    if (month > 2 && month < 9){
                        return lat > 0 ? 'Summer' : 'Winter';
                    } else {
                        return lat > 0 ? 'Winter' : 'Summer';
                    }
                }

                export const SeasonsDisplay = (props) => {
                    const season = getSeason(props.lat, new Date().getMonth());
                    
                    // WE CAN DO TOO // const text = season === 'Winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
                    const {text} = seasonConfig[season]; // here we get only the text propertie

                    return <>
                        <p><b>Latitude:</b> {props.lat} </p>
                        <p><b>Longitude:</b> {props.long} </p>
                        {/* NOTE THIS WAY OF PASS CSS DYNAMICALLY */}
                        <p className={'anyOne '+season}><b>The season is: </b> "{season}" so "{text}"</p> 
                    </>
                }
                `
            },
            {
                result:<Geolocation/>
            },
        ]
    },
    {
        title:'Advanced Styling',
        body:[
            {
                explanation:<>
                    <p>In this example we use the Faker library. See more in <a href="https://github.com/Marak/faker.js" target="_blank" title="click here and go to the page">Faker.js</a></p>
                    <p>We need to install the dependency "styled-components" to use this type of styling.</p> 
                </>
            },
            {
                code:`
                npm install styled-components --save
                `
            },
            {
                explanation:<>
                    <p>Analyze the class below:</p>
                </>
            },
            {
                code:`
                import {UserComment} from './UserComment';
                import {ApprovalCard} from './ApprovalCard';
                import faker from 'faker';
                import { Component } from 'react';


                export default class UserCommentList extends Component {
                    render() {
                        return <>
                            <h3>Approved</h3>
                            <UserComment
                                author={faker.name.findName()}
                                time={'this time'}
                                comment={'nice!'}
                                img={faker.image.animals()}
                            > 
                                Comment:
                            </UserComment>

                            <br/><br/>

                            <h3>Waiting approval</h3>
                            {/* This is a perfect exemple of Reusability */}
                            <ApprovalCard
                            >
                                <UserComment
                                    author={faker.name.findName()}
                                    time={'this time'}
                                    comment={'nice!'}
                                    img={faker.image.animals()}
                                >
                                    Comment:
                                </UserComment>
                            </ApprovalCard>
                        </>
                    }   
                }
                `
            },
            {
                code:`
                import {UserComment} from './UserComment';
                import {ApprovalCard} from './ApprovalCard';
                import faker from 'faker';
                import { Component } from 'react';


                export default class UserCommentList extends Component {
                    render() {
                        return <>
                            <h3>Approved</h3>
                            <UserComment
                                author={faker.name.findName()}
                                time={'this time'}
                                comment={'nice!'}
                                img={faker.image.animals()}
                            > 
                                Comment:
                            </UserComment>

                            <br/><br/>

                            <h3>Waiting approval</h3>
                            {/* This is a perfect exemple of Reusability */}
                            <ApprovalCard
                            >
                                <UserComment
                                    author={faker.name.findName()}
                                    time={'this time'}
                                    comment={'nice!'}
                                    img={faker.image.animals()}
                                >
                                    Comment:
                                </UserComment>
                            </ApprovalCard>
                        </>
                    }   
                }
                `
            },
            {
                code:`
                import styled from 'styled-components'

                export const Content = styled.div\`
                    width:  100%;
                    background-color:  white;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    margin-bottom: 25px;
                    margin-top: 0;
                    margin-bottom: 0;
                    margin-left: 15px;
                    margin-right: 15px;
                    padding: 10px;
                \`

                export const Polaroid = styled.div\`
                    width: 200px;
                    background-color: white;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    margin-bottom: 25px;
                    margin-top: 0;
                    margin-bottom: 0;
                \`

                export const ApprovalCard = props => {

                    const approve = {
                        backgroundColor: 'green',
                    }
                    const reject = {
                        backgroundColor: 'red',
                    }

                    return<> 
                        {props.children}
                        <button style={approve}>Approve</button>
                        <button style={reject}>Reject</button>
                    </>
                }
                `
            },
            {
                result:<UserCommentList/>
            },
            {
                note:<>
                    <p>Inside this code above we have a perfect example of Reusability.</p>
                </>
            },
        ]
    },
    {
        title:'Axios vs Fetch',
        body:[
            {
                explanation:<>
                    <p>"Axios" is a stand alone 3rd party package. Uses a more professional approach. To install axios we need to do:</p>
                </>
            },
            {
                code:`
                npm install --save axios
                `
            },
            {
                explanation:<>
                    <p>"Fetch" is a function built into modern browsers, so we dont need to install it. Its a low level function to handler with basic data.</p>
                </>
            },
        ]
    },
    {
        title:'Consuming an external API',
        body:[
            {
                explanation:<>
                    <p>Here, we will consume an external API, start to making a better use of the containers and other good pratices.</p>
                </>
            },
            {
                code:`
                import { Component } from "react";
                import {} from '../../assets/css/Styling';
                import SearchBar from './SearchBar';
                import {ImageList} from './ImageList';
                import unsplash, {} from '../../service/Unsplash';


                export default class PuttingAllTogether extends Component {

                    state = {
                        // empty array
                        images:[],
                    };

                    onSearchSubmit = async (term) => {
                        const anyResponse = await unsplash
                            .get('/search/photos',
                            {
                                params:{
                                    query: term,
                                },
                            }
                        );
                        this.setState({
                            images: anyResponse.data.results,
                        });
                    }

                    render(){
                        return<>
                            <SearchBar 
                                onSubmit={this.onSearchSubmit} 
                            ></SearchBar>
                            <p>found: {this.state.images.length} images</p>
                            <ImageList
                                images={this.state.images}
                            ></ImageList>
                        </>
                    }    
                }
                `
            },
            {
                code:`
                import { Component } from "react";
                import { TextInput } from '../../assets/css/Styling';

                export default class SearchBar extends Component {

                    state = {
                        term: '',
                    }

                    onFormSubmit = e => {
                        e.preventDefault(); // this code prevents page reload before hit the enter on input tag
                        this.props.onSubmit(this.state.term);
                    }

                    render(){
                        return<>
                        <form onSubmit={this.onFormSubmit}> {/* passing data to parent PuttingAllTogether */}
                            <label>Search:</label>
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
                `
            },
            {
                code:`
                import {ImageWrapper} from '../../assets/css/Styling';

                export const ImageList = (props) => {

                    // We can destructuring to short typing
                    const images = props.images.map(({alt_description, id, urls}) => {
                        return <ImageWrapper 
                            alt={alt_description}
                            key={id}
                            src={urls.regular} 
                        />
                    });

                    return <>
                        {console.log(props.images)}
                        {images}
                    </>
                };
                `
            },
            {
                code:`
                import axios from 'axios';

                export default axios.create({
                    baseURL: 'https://api.unsplash.com',
                    headers: {
                        Authorization:'Client-ID 5skIVtgZGKpuBwGbNgjxxO-5_tkIyaUfYuYGNlO1EQ0',
                    },
                });
                `
            },
            {
                result:<PuttingAllTogether/>
            },
        ]
    },
    {
        title:'React Hooks',
        body:[
            {
                explanation:<>
                    <p><b>useState:  </b>Hooks is a function that lets you use "state" in a functional component</p>
                    <p><b>useEffect:  </b>Hooks is a function that lets you use something like "lifecycle methods" in a functional component</p>
                    <p><b>useRef:  </b>Hooks is a function that lets you create a "ref" in a function component</p>
                </>
            },
            {
                note:<>
                    <p>Hooks are a way to write reusable code, instead of more classic techniques like inheritance.</p>
                </>
            },
            {
                chapter:'Primitive Hooks'
            },
            {
                explanation:<>
                    <p><b>useState: </b> </p>
                    <p><b>useEffect: </b> </p>
                    <p><b>useContext: </b> </p>
                    <p><b>useReducer: </b> </p>
                    <p><b>useCallback: </b> </p>
                    <p><b>useMemo: </b> </p>
                    <p><b>useRef: </b> </p>
                    <p><b>useImperativeHandle: </b> </p>
                    <p><b>useLayoutEffect: </b> </p>
                    <p><b>useDebugValue: </b> </p>
                </>
            },
            {
                chapter:'Custom Hook'
            },
            {
                explanation:<>
                    <p><b>useCustomHook: </b>useState, useEffect... </p>
                </>
            },
        ]
    },
]

export const Home = () => {
    return <>
        <Paragraph
            items={items}
        ></Paragraph>
    </>
}