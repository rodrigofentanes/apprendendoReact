import FunctionalComponent from "../ExemplePages/FunctionalComponent";
import OtherComponent from "../ExemplePages/OtherComponent";
import JsInsideJsx  from '../ExemplePages/JsInsideJsx';
import ClassBasedComponent  from '../ExemplePages/ClassBasedComponent';
import PassingValuesFunctional from "../ExemplePages/PassingValuesFunctional";
import PassingValuesClassBased from "../ExemplePages/PassingValuesClassBased";
import ChildrenComponent from "../ExemplePages/ChildrenComponent";
import StatePropertie from "../ExemplePages/StatePropertie";
import ReRenderStateDOM from "../ExemplePages/ReRenderStateDOM";
import { ReRenderStateDOMIntoHook } from "../ExemplePages/ReRenderStateDOMIntoHook";
import PassingExternalMethod from "../ExemplePages/PassingExternalMethod";
import ValueToFunction from "../ExemplePages/ValueToFunction";
import TwoWayBind from "../ExemplePages/TwoWayBind";
import CssInlineStyle from "../ExemplePages/CssInlineStyle";

const intro = () => {
    return <div>
        <h2>What is React?</h2>
        <p>React is a <u>JS Library</u> for building <u>User Interfaces</u>.</p>
        <p>This user interfaces is build throught <u>components</u>.</p>
        <p>All React activity happens on the browser.</p>
        
        <h2>Babel preprocessor</h2>
        <p>React uses one different JavaScript syntax, because this the preprocessor <b>Babel</b> is required to compile the code.</p>
        <p>Babel allows us to use "HTML syntax" to build our applicantion.</p>
        



        <h2>Component</h2>
        <p>Component is just a function.</p>
        <ul>
            <li>This function need the first letter as capital.</li>
            <li>This function has to return the code to be rendered to the real DOM.</li>
            <li>We can use empty tags like {"<> </>"} inside the components.</li>
        </ul>
        <p>When creating components, you have the choice between <b>three different ways</b>:</p>
        <ol>
            <li className="h3"><b>Funtional components</b> (also referred to as "presentational", "dumb" or "stateless" components) 
                <ul>
                    <li>
                        <p>Code:</p>
                        <div className="Code">
                            <p>
                                {"const functionalComponent = () => {"}<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; {"return <>some JSX</>"}<br/>
                                {"}"}<br/><br/>
                                {"export default functionalComponent;"}
                            </p>
                        </div>
                        <p>Result:</p>
                        <div className="Result">
                            <p>
                                <FunctionalComponent/>
                            </p>
                        </div>
                    </li>
                </ul>
            </li>
            <li className="h3">
                <b>Other way to do one component</b> 
                <p>Code:</p>
                <div className="Code">
                    <p>
                        {"function OtherComponent() {"}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp; {"return ("}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {"<>Some JSX code.</>"}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp; {");"}<br/>
                        {"}"}<br/><br/>
                        {"export default OtherComponent;"}
                    </p>
                </div>
                <p>Result:</p>
                <div className="Result">
                    <p>
                        <OtherComponent/>
                    </p>
                </div>
            </li>
            <li className="h3"><b>Class-based components</b> (also referred to as "containers", "smart" or "stateful" components) 
                <ul>
                    <li>
                        <p>Code:</p>
                        <div className="Code">
                            <p>
                                {"import React, { Component } from 'react';"}<br/><br/>
                                {"class ClassBasedComponent extends Component {"}<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; {"render () {"}<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {"return <>Some JSX code.</>"}<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; {"}"}<br/>
                                {"}"}<br/><br/>
                                {"export default ClassBasedComponent;"}<br/>
                            </p>
                        </div>
                        <p>Result:</p>
                        <div className="Result">
                            <p>
                                <ClassBasedComponent/>
                            </p>
                        </div>
                    </li>
                </ul>
            </li>
        </ol>
        



        <h2>JSX</h2>
        <p>Is a special JS <u>syntax extension</u> that produces react <u>elements</u>. Its use is optional, so react donsn't require it.</p>
        <div className="h3">
            <h3>JSX restrictions:</h3>
            <ul>
                <li>
                    <p>The input "class" is not allowed, therefore we will use the tag "className".</p>
                </li>
                <li>
                    <p>React permits only one root element per component.</p>
                </li>
            </ul>
        </div>
        <div className="h3">
            <h3>We need to use curly braces {"{ }"} to use JS sintax inside on the JSX:</h3>
            <p>The code is: </p>
            <div className="Code">
                <p>
                    {"{"}Math.floor(Math.random()*2000){"}"}
                </p>
            </div>
            <p>The result will be someone random number between 0 and 2000:</p>
            <div className="Result">
                <p>
                <JsInsideJsx/>
                </p>
            </div>
            <p className="Note"><b>Note:</b> The code to reload the page is interesting, it is worth looking at.</p>
        </div>
        
        


        <h2>React-DOM</h2>
        <p>React-DOM renders the components to the real DOM.</p>
        <p>ReactDOM is a react object, it allows us to call his methods.</p>
        <div className="h3">
            <h3>Render method</h3>
            <p>The render method allow us to...</p>
        </div>




        <h2>Outputting basic dynamic content with "props"</h2>
        <p>We will need the argument "props" to manage all data. the props argument holds all properties of one component. Properties is the attributes that we have inside a component.</p>
        <p> "props" allow you to pass data from a parent (wrapping) component to a child (embedded) component.</p>
        <p className="Note"><b>Note</b>: the name "props" is chose by convention, but we can change the argument name "props" to any other name. </p>
        <div className="h3">
            <h3>Functional way</h3>
            <p>The code:</p>
            <div className="Code">
                <p>
                    {"const passingValuesFunctional = (props) => {"}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{"return <>"}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"I'am {props.name} and I have {props.age} years old."}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{"</>"}<br/>
                    {"};"}<br/>
                    {"export default passingValuesFunctional;"}<br/>
                </p>
            </div>
            <p>The result:</p>
            <div className="Result">
                <p>
                    <PassingValuesFunctional name="Rodrigo" age="30">This code inside this tag is not visible</PassingValuesFunctional>
                </p>
            </div>
        </div>
        <div className="h3">
            <h3>Class-Based way</h3>
            <p>The code:</p>
            <div className="Code">
                <p>
                    {"import React, { Component } from 'react';"}<br/><br/>
                    {"class PassingValuesClassBased extends Component {"}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{"render() {"}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"return <>"}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"My name is {this.props.name} and my age is {this.props.age}"}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"</> "}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
                    {"};"}<br/>
                    {"export default PassingValuesClassBased;"}<br/>
                </p>
            </div>
            <p>The result:</p>
            <div className="Result">
                <p>
                    <PassingValuesClassBased name="Rodrigo" age="30">This code inside this tag is not visible</PassingValuesClassBased>
                </p>
            </div>
        </div>
        



        <h2>The "props.children" element</h2>
        <p>We use {"{props.children}"} sintax to access the elements inside one component tag.</p>
        <p>Look inside the code to understand:</p>
        <div className="Result">
            <p>
                <ChildrenComponent>This code inside this tag is now visible.</ChildrenComponent>
            </p>
        </div>




        <h2>Understanding and using "state"</h2>
        <p>A Class-Based way is called "smart" because inside one class we can have variables and other interesting properties.</p>
        <p>Whilst props allow you to pass data down the component tree (and hence trigger an UI update), state is used to change the component, well, state from within. Changes to state also trigger an UI update.</p>
        <p>
            The propertie "state" only can be used when we "extends" actual class/component to the "Component" class.
            State must be used with care, because it can make the app unpredictable and hard to manage.
        </p>
        <p className="Note"><b>Note</b>: "state" is one reserved word. Its used to manage some internal data information.</p>
        <p className="Note"><b>Note</b>: the propertie state need to be inside one class. </p>
        <p className="Note"><b>Note</b>: the square brackets {"[ ]"} is used to open and close one array. </p>
        <p className="Note"><b>Note</b>: the word "this" refers to it own class. </p>
        <p className="Note"><b>Note</b>: "props"  and "state"  are CORE concepts of React. </p>
        <p className="Note"><b>Note</b>: Actually, only changes in "props" and/ or "state" trigger React to re-render your components and potentially update the DOM in the browser. </p>
        <p>The basic code to use state is:</p>
        <div className="Code">
            <p>
                {"import React, { Component } from 'react';"}<br/><br/>
                {"class StatePropertie extends Component {"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{"state = {"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"persons: ["}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{name:'max', age:28},"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{name:'louie', age:22},"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{name:'julian', age:43},"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"]"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{"render() {"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"return <>"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"My name is {this.state.persons[0].name} and my age is {this.state.persons[0].age}. <br/>"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"My name is {this.state.persons[1].name} and my age is {this.state.persons[1].age}. <br/>"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"My name is {this.state.persons[2].name} and my age is {this.state.persons[2].age}. <br/>"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"</>"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
                {"};"}<br/><br/>
                {"export default StatePropertie;"}<br/>
            </p>
        </div>
        <p>The result is:</p>
        <div className="Result">
            <p>
                <StatePropertie></StatePropertie>
            </p>
        </div>
        <div className="h3">
            <h3>State Re-render propertie</h3>
            <p>The state is special because it can be changed and every state change leads the React to re-render the DOM. See bellow:</p>
            <p className="Note"><b>Note</b>: The event "onclick" in normal HTML don't have a capital "C", but in JSX it have, so we write "onClick". This is used to execute dynamic code.</p>
            <p className="Note"><b>Note</b>: Don't use parenthesis when you want to make a reference. So, inside onClick, we only reference a function -- this.switchNameHandler -- and don't call it -- this.switchNameHandler( ) --.</p>
            <p className="Note"><b>Note</b>: See more supported event listeners in the link <a href="https://reactjs.org/docs/events.html#supported-events">React Supported Events</a></p>
            <p className="Note"><b>Note</b>: The word "this" within a function with parenthesis will make a reference to the class it is in and it will lead to many errors. Thats why we need to use an arrow funtion.</p>
            <p>The code:</p>
            <div className="Code">
                <p>The code is inside the component "ReRenderStateDOM", seach for it.</p>
                <p><b>Note</b>: from now on all large code will not be written here.</p>
            </div>
            <p>The result:</p>
            <div className="Result">
                <p>
                    <ReRenderStateDOM></ReRenderStateDOM>                
                </p>
            </div>
        </div>
        



        <h2>Warning!</h2>
        <p>From now on we can minimize declarations doing this tricks bellow.</p>
        <div className="h3">
            <h3>Exporting and importing constants:</h3>
            <p>To export one constant:</p>
            <div className="Code">
                <p>
                    {"export const ConstantName = () => {...};"} 
                </p>
            </div>
            <p>To import one constant:</p>
            <div className="Code">
                <p>
                    {"import { ConstantName } from"} "{"./PATH/TO/THE/FILE"}" {";"} 
                </p>
            </div>
            <p className="Note"><b>Note:</b> To import constants by this way we need to use the curly braces to declare the component name.</p>
        </div>
        <div className="h3">
            <h3>Exporting and importing functions:</h3>
            <p>To export one function:</p>
            <div className="Code">
                <p>
                    {"export default function FunctionName(){...}"} 
                </p>
            </div>
            <p className="Note"><b>Note</b>: Functions don't need to be closed by " ; ".</p>
            <p>To import one function:</p>
            <div className="Code">
                <p>
                    {"import FunctionName from"} "{"./PATH/TO/THE/FILE"}"{";"} 
                </p>
            </div>
        </div>
        <div className="h3">
            <h3>Exporting and importing classes:</h3>
            <p>To export one class:</p>
            <div className="Code">
                <p>
                    {"export default class ClassName extends Component {...};"} 
                </p>
            </div>
            <p>To import one class:</p>
            <div className="Code">
                <p>
                    {"import ClassName from"} "{"./PATH/TO/THE/FILE"}"{";"} 
                </p>
            </div>
        </div>
        



        <h2>Introducing Hooks</h2>
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
        <p className="Note"><b>Note</b>: Here we use the "array destructuring" JS feature.</p>
        <p>You can compare the before component ReRenderStateDOM with this component bellow, because this is a convertion of it into a hook.</p>
        <p>Code:</p>
        <div className="Code">
            <p>The code is in the component "ReRenderStateDOMIntoHook" bellow</p>
        </div>
        <p>Result:</p>
        <div className="Result">
            <p>
                <ReRenderStateDOMIntoHook></ReRenderStateDOMIntoHook>
            </p>
        </div>
        <p className="Note"><b>Note:</b> Remember the strange behavior seen in the last exemple? Inside the code above we can see one way to fix this. Enjoy and have fun with the buttons.</p>




        <h2>Passing Methods</h2>
        <p>We can pass methods, also as props, to the child component.</p>
        <p>Look this class-based component working:</p>
        <div className="Result">
            <p>
                <PassingExternalMethod></PassingExternalMethod>
            </p>
        </div>
        



        <h2>Passing Values to Functions</h2>
        <p>We can pass values to funtions usind the "bind" method or passing one anonyous function:</p>
        <div className="Result">
            <p>
                <ValueToFunction></ValueToFunction>
            </p>
        </div>
        <p className="Note"><b>Note:</b> the "this" inside the bind method refers to the function "switchDataPropertie".</p>
        <div className="h3">
            <h3>Two way bind</h3>
            <p></p>
            <div className="Result">
                <p>
                    <TwoWayBind></TwoWayBind>
                </p>
            </div>
        </div>
        



        <h2>Styling components</h2>
        <p>We will see two ways of styling implement. </p>
        <p>The <b>first</b> way is create one css file and import it, see:</p>
        <p>The import code:</p>
        <div className="Code">
            <p>
                {"import './PATH/TO/THE/CSS_FILE'"}
            </p>
        </div>
        <p>The <b>second</b> way is called "Inline Style" and is usefull when we want to give style into one specific scope, see:</p>
        <p>Code:</p>
        <div className="Code">
            <p>
                {"import {Component} from"} "{"react"}" {";"}<br/><br/>
                {"export default class CssInlineStyle extends Component {"}<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp; {"render() {"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {"const ourStyle = {"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {"backGroundColor: 'green',"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {"font: 'inherit',"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {"border: '3px solid red',"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {"padding: '8px',"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {"cursor: 'cell'"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {"};"}<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {"return <>"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {"<button style={ourStyle} >This is one inline styled button</button>"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {"</>"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; {"}"}<br/>
                {"}"}<br/>
            </p>
        </div>
        <p>Result:</p>
        <div className="Result">
            <p>
                <CssInlineStyle></CssInlineStyle>
            </p>
        </div>
    </div>
}

export default intro;