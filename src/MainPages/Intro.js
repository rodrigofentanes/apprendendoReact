import FunctionalComponent from "../ExemplePages/FunctionalComponent";
import OtherComponent from "../ExemplePages/OtherComponent";
import JsInsideJsx  from '../ExemplePages/JsInsideJsx';
import ClassBasedComponent  from '../ExemplePages/ClassBasedComponent';
import PassingValuesFunctional from "../ExemplePages/PassingValuesFunctional";
import PassingValuesClassBased from "../ExemplePages/PassingValuesClassBased";
import ChildrenComponent from "../ExemplePages/ChildrenComponent";

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
        </ul>
        <p>When creating components, you have the choice between <b>three different ways</b>:</p>
        <ol>
            <li><b>Funtional components</b> (also referred to as "presentational", "dumb" or "stateless" components) 
                <ul>
                    <li>
                        <p>Code:</p>
                        <div className="Code">
                            <p>
                                {"const functionalComponent = () => {"}<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; {"return <div>some JSX<div>"}<br/>
                                {"}"}<br/><br/>
                                {"export default functionalComponent;"}
                            </p>
                        </div>
                        <p>Result:</p>
                        <div className="Result">
                            <FunctionalComponent/>
                        </div>
                    </li>
                </ul>
            </li>
            <li><b>Other way to do one component</b> 
                <ul>
                    <li>
                        <p>Code:</p>
                        <div className="Code">
                            <p>
                                {"function OtherComponent() {"}<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; {"return ("}<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {"<div>Some JSX code.</div>"}<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; {");"}<br/>
                                {"}"}<br/><br/>
                                {"export default OtherComponent;"}
                            </p>
                        </div>
                        <p>Result:</p>
                        <div className="Result">
                            <OtherComponent/>
                        </div>
                    </li>
                </ul>
            </li>
            <li><b>Class-based components</b> (also referred to as "containers", "smart" or "stateful" components) 
                <ul>
                    <li>
                        <p>Code:</p>
                        <div className="Code">
                            <p>
                                {"import React, { Component } from 'react';"}<br/><br/>
                                {"class ClassBasedComponent extends Component {"}<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; {"render () {"}<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {"return <div>Some JSX code.</div>"}<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; {"}"}<br/>
                                {"}"}<br/><br/>
                                {"export default ClassBasedComponent;"}<br/>
                            </p>
                        </div>
                        <p>Result:</p>
                        <div className="Result">
                            <ClassBasedComponent/>
                        </div>
                    </li>
                </ul>
            </li>
        </ol>
        
        <h2>JSX</h2>
        <p>Is a special JS <u>syntax extension</u> that produces react <u>elements</u>. Its use is optional, so react donsn't require it.</p>
        <h3>JSX restrictions:</h3>
        <ul>
            <li>
                <p>The input "class" is not allowed, therefore we will use the tag "className".</p>
            </li>
            <li>
                <p>React permits only one root element per component.</p>
            </li>
        </ul>
        <h3>We need to use curly braces {"{ }"} to use JS sintax inside on the JSX:</h3>
        <p>The code is:<br/> <b>{"{"}Math.floor(Math.random()*2000){"}"}</b></p> 
        <p>The result will be someone random number between 0 and 2000: <b><JsInsideJsx/></b></p>
        
        <h2>React-DOM</h2>
        <p>React-DOM renders the components to the real DOM.</p>
        <p>ReactDOM is a react object, it allows us to call his methods.</p>
        <h3>Render method</h3>
        <p>The render method allow us to...</p>

        <h2>Outputting dynamic content</h2>
        <p>We will need the argument "props" to manage all data. the props argument holds all properties of one component. Properties is the attributes that we have inside a component.</p>
        <p><b>Note</b>: the name "props" is chose by convention, but we can change the argument name "props" to any other name. </p>
        <h3>Functional way</h3>
        <p>The code:</p>
        <div className="Code">
            <p>
                {"const passingValuesFunctional = (props) => {"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{"return <div>"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"I'am {props.name} and I have {props.age} years old."}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{"</div>"}<br/>
                {"};"}<br/>
                {"export default passingValuesFunctional;"}<br/>
            </p>
        </div>
        <p>The result:</p>
        <div className="Result">
            <PassingValuesFunctional name="Rodrigo" age="30">This code inside the tag is not visible</PassingValuesFunctional>
        </div>
        <h3>Class-Based way</h3>
        <p>The code:</p>
        <div className="Code">
            <p>
                {"import React, { Component } from 'react';"}<br/><br/>
                {"class PassingValuesClassBased extends Component {"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{"render() {"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"return <div>"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"My name is {this.props.name} and my age is {this.props.age}"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"</div> "}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
                {"};"}<br/>
                {"export default PassingValuesClassBased;"}<br/>
            </p>
        </div>
        <p>The result:</p>
        <div className="Result">
            <PassingValuesClassBased name="Rodrigo" age="30">This code inside the tag is not visible</PassingValuesClassBased>
        </div>
        <h3>The "children" element</h3>
        <p>We use {"{props.children}"} sintax to access the elements inside one component tag.</p>
        <p>Look the code bellow to understand:</p>
        <div className="Result">
            <ChildrenComponent>This code inside the tag is now visible</ChildrenComponent>
        </div>
        <h3>Understanding and using State</h3>
        <p>A Class-Based way is called "smart" because inside one class we can have variables and other interesting properties.</p>
        <p>
            While props is set and passed from outside a component, the special propertie named "state" is managed inside a component.
            The propertie "state" only can be used when we "extends" actual class/component to the "Component" class.
            State must be used with care, because it can make the app unpredictable and hard to manage.
        </p>
        <p>"state" is one reserved word. Its used to manage some internal data information.</p>
        <p><b>Note</b>: the square brackets {"[ ]"} is used to open and close one array. </p>
        <p><b>Note</b>: the word "this" refers to it own class. </p>


        <h2></h2>

    </div>
}

export default intro;