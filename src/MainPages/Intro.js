import FunctionalComponent from "../ExemplePages/FunctionalComponent";
import OtherComponent from "../ExemplePages/OtherComponent";
import JsInsideJsx  from '../ExemplePages/JsInsideJsx';
import ClassBasedComponent  from '../ExemplePages/ClassBasedComponent';

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
        <p>The code:</p>
        <div className="Code">
            <p>...</p>
        </div>
    </div>
}

export default intro;