import FunctionalComponent from '../ExemplePages/FunctionalComponent';
import OtherComponent from '../ExemplePages/OtherComponent';
import JsInsideJsx  from '../ExemplePages/JsInsideJsx';
import ClassBasedComponent  from '../ExemplePages/ClassBasedComponent';
import PassingValuesFunctional from '../ExemplePages/PassingValuesFunctional';
import PassingValuesClassBased from '../ExemplePages/PassingValuesClassBased';
import ChildrenComponent from '../ExemplePages/ChildrenComponent';
import StatePropertie from '../ExemplePages/StatePropertie';
import ReRenderStateDOM from '../ExemplePages/ReRenderStateDOM';
import { ReRenderStateDOMIntoHook } from '../ExemplePages/ReRenderStateDOMIntoHook';
import PassingExternalMethod from '../ExemplePages/PassingExternalMethod';
import ValueToFunction from '../ExemplePages/ValueToFunction';
import TwoWayBind from '../ExemplePages/TwoWayBind';
import CssInlineStyle from '../ExemplePages/CssInlineStyle';

const intro = () => {
    return <div>
        <h2>What is React?</h2>
        <p>React is a <u>JS Library</u> for building <u>User Interfaces</u>.</p>
        <p>This user interfaces is build throught <u>components</u>.</p>
        <p>All React activity happens on the browser.</p>
        



        <h2>Babel (Dependency)</h2>
        <p>
            React uses different versions of JavaScript, so the preprocessor <b>Babel </b> 
            is required to compile and run the code within any brownser.
        </p>
        <p>We can enter in <a href="https://babeljs.io/" target="_blank" title="click here and go to the page">babel</a> website and click on <b>try it</b> to check the code and see how it looks like after be converted.</p>
        <p>Babel converts the JSX code too.</p>
        



        <h2>Webpack (Dependency)</h2>
        <p></p>




        <h2>Dev Server (Dependency)</h2>
        <p></p>
        



        <h2>Generating a REACT project</h2>
        <p>The recommended method for generating a project is now:</p>
        <div className="Code">
            <p>
                npx create-react-app myapp
            </p>
        </div>
        <p>The old way have two steps:</p>
        <div className="Code">
            <p>
                npm install -g create-react-app <br/>
            </p>
        </div>
        <div className="Code">
            <p>
                create-react-app myapp
            </p>
        </div>
        <p>
            If you get any errors about missing templates or how a global Create React App install is no longer supported even 
            when using this command, you likely need to remove the global package from your system:
        </p>
        <div className="Code">
            <p>
                npm uninstall -g create-react-app
            </p>
        </div>
        <p className="Note"><b>Note: </b>If you is in one linux distro you will need to do some steps more to complete delete:</p>
        <div className="Code">
            <p>
                rm -rf /usr/local/bin/create-react-app
            </p>
        </div>
        <p className="Note"><b>Note: </b>If you want to know more about, access the site: <a href="https://github.com/facebook/create-react-app" target="_blank" title="click here and go to the page">https://github.com/facebook/create-react-app</a></p>
        <p>If you are cloning a git project, you need to do:</p>
        <div className="Code">
            <p>
                npm i
            </p>
        </div>
        <p>or</p>
        <div className="Code">
            <p>
                yarn install
            </p>
        </div>

        

        <h2>Understanding Project Directory</h2>
        <p><b>src: </b>Folder where we put all the source code we write.</p>
        <p><b>public: </b>Folder that stores static files, like images.</p>
        <p><b>node_modules: </b>Folder that contains all of ou project dependencies.</p>
        <p><b>package.json: </b>Records our project dependencies and configures our project.</p>
        <p><b>package.lock: </b>Records the exact version of packages that we install.</p>
        <p><b>README.md: </b>Instructions on how to use this project.</p>
        <div className="h3">
            <h3>Other types of directories (patterns)</h3>
            <p><b>assets: </b>Folder that...</p>
            <p><b>components: </b>Folder that...</p>
            <p><b>helpers: </b>Folder that...</p>
            <p><b>hooks: </b>Folder that...</p>
            <p><b>service: </b>Folder that...</p>
            <p><b>views: </b>Folder that...</p>
        </div>




        <h2>Running a npm/yarn server</h2>
        <p>To start a server we need to put into the terminal:</p>
        <div className="Code">
            <p>
                npm start
            </p>
        </div>
        <p>or:</p>
        <div className="Code">
            <p>
                yarn start
            </p>
        </div>
        <p className="Note"><b>Note: </b>Execute this code above inside the project folder.</p>
        <p>We can access the site on port: <a href="http://localhost:3000/" target="_blank" title="click here and go to the page">http://localhost:3000/</a></p>
        <p>or we can use the port given by the server itself, it will look like <b>http://192.168.0.6/</b></p>
        <p className="Note"><b>Note: </b>We can see the given port as soon as the server starts.</p>




        <h2>JSX</h2>
        <p>The JSX allows us to use "HTML" syntax inside our code.</p>
        <p className="Note"><b>Note: </b>Special dialect of JSX is JavaScript code, its not HTML</p>
        <p className="Note"><b>Note: </b>Brownser don't understad JSX code! We write JSX then run tools to turn it into normal JS.</p>
        <p className="Note"><b>Note: </b>Very similar in form and function to HTML with a couple differences.</p>
        <p>JSX is a special JS <u>syntax extension</u> that produces react <u>elements</u>. Its use is optional, so react donsn't require it.</p>
        <div className="h3">
            <h3>JSX restrictions:</h3>
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
        </div>
        <div className="h3">
            <h3>JSX Interpolation</h3>
            <p>We need to use curly braces {"{ }"} to use JS within the JSX:</p>
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




        <h2>Component</h2>
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
        <div className="h3">
            <h3>Funtional components</h3> 
            <p>Also referred to as "presentational", "dumb" or "stateless" components.</p> 
            <p>Can produce JSX to show content to the user</p>
            <p>Code (Modern way):</p>
            <div className="Code">
                <p>
                    {"const functionalComponent = () => {"}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp; {"return <>some JSX</>"}<br/>
                    {"}"}<br/><br/>
                    {"export default functionalComponent;"}
                </p>
            </div>
            <p>Code (Old way):</p>
            <div className="Code">
                <p>
                    {"const functionalComponent = function() {"}<br/>
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
            <br/><br/>
            <h3>Other way to do one functional component</h3> 
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
        </div>
        <div className="h3">
            <h3>Class-based components</h3>
            <p>Also referred to as "containers", "smart" or "stateful" components.</p>
            <p>A Class-Based way is called "smart" because inside one class we can have variables and other interesting properties.</p>
            <p>Can produce JSX to show content to the user.</p>
            <p className="Note"><b>Note:</b> Hooks system, using function components, can produce JSX to show content to the user.</p>
            <p>Can use the Lifecycle Method system to run code at specific points in time.</p>
            <p className="Note"><b>Note:</b> Hooks system, using function components, can use Hooks to run code at specific points in time.</p>
            <p>Can use the 'state' system to update content on the screen.</p>
            <p className="Note"><b>Note:</b> Hooks system, using function components, can use Hooks to access state system and update content on screen.</p>
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
        </div>
        <p className="Note"><b>Note: </b>The parentheses before the "return" is optional, but its use is nice to indent code.</p>
        <div className="h3">
            <h3>Basic component index page</h3>
            <div className="Code">
                <p>
                    {"import React from 'react';"}<br/>
                    {"import ReactDOM from 'react-dom';"}<br/>
                    {""}<br/>
                    {"// Create a react compont"}<br/>
                    {"const App = () => {"}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp; {"return <div>Hello!</div>;"}<br/>
                    {"};"}<br/>
                    {""}<br/>
                    {"// Take the react component and show it on the screen"}<br/>
                    {"ReacDOM.render("}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp; {"<App/>,"}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp; {"document.querySelector('#root')"}<br/>
                    {");"}<br/>
                </p>
            </div>
        </div>
        



        <h2>React-DOM</h2>
        <p>React-DOM renders the components to the real DOM.</p>
        <p>ReactDOM is a react object, it allows us to call his methods.</p>
        <div className="h3">
            <h3>Render method</h3>
            <p>The render method allow us to render one componet isolated if we want. Everything inside the render method will be renderized.</p>
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
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {"const buttonText = 'This is a inline stylized button';"}<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {"function getButtonText(){"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {"return 'Click on me';"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {"}"}<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {"return <>"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {"<button style={ourStyle} >"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {"{buttonText}"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {"</button>"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {"<br/>"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {"<button style={ourStyle} >"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {"{getButtonText()}"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {"</button>"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {"</>"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; {"}"}<br/>
                {"}"}<br/>
            </p>
        </div>
        <p className="Note"><b>Note: </b>We can use single or double quotes to pass an style name but by convention we use single quotes.</p>
        <p className="Note"><b>Note: </b>We can easily make JSX reference to JS variables and we do it putting a JS code into a curly braces block.</p>
        <p>Result:</p>
        <div className="Result">
            <p>
                <CssInlineStyle></CssInlineStyle>
            </p>
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
        <p>We create a Object when we do this bellow:</p>
        <div className="Code">
            <p>
                {"const variable = { text: 'foo', otherPropertie: '123' };"}<br/>
            </p>
        </div>
        <p>In exemple above "variable" receive a object.</p>
        <p>We can use "state" within class-based components or Hooks system. "state" is a JS object that contains relevant data to a component.</p>
        <p>Updatating "state" on a component causes the component to (almost) instantly rerender.</p>
        <p>"state" can only be update using the "setState" function.</p>
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
    </div>
}

export default intro;