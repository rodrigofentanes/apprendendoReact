import ToggleContentJSX from '../components/EPListsAndConditionals/ToggleContentJSX';
import ToggleContentJS from '../components/EPListsAndConditionals/ToggleContentJS';
import OutputtingListWithMap from '../components/EPListsAndConditionals/OutputtingListWithMap';
import ArrayManipulation from '../components/EPListsAndConditionals/ArrayManipulation';
import Geolocation from '../components/EPListsAndConditionals/Geolocation';


export const ListsAndConditionals = () => {
    return <div>
        <h2>Lists and Conditionals</h2>
        
        <div className="h3">
            <h3>Rendering content conditionally (JSX Interpolation)</h3>
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
            <p>Code:</p>
            <div className="Code">
                <p>Code is inside "ToggleContentJSX"</p>
            </div>
            <p>Result:</p>
            <div className="Result">
                <p>
                    <ToggleContentJSX></ToggleContentJSX>
                </p>
            </div>
            <p className="Note">
                <b>Note:</b> inside a component we can use normal functions and arrow functions, 
                but normal function will create problems if we want to use the "this" keyword though 
                and since we will call this method here upon event fired in the DOM, this would lead to real problems.
                Use arrow functions ensures the "this" propertie always, under all circumstances, returns to it own class.
            </p>
            <p className="Note">
                <b>Note:</b> In REACT we always work with JavaScript, everything is JavaScript.
            </p>
            <p className="Note">
                <b>Note:</b> Curly braces is required to execute JS expressions.
            </p>
            <p className="Note">
                <b>Note:</b> Ternary operator looks like <b>{"{"} SomeCondition ? if true do it : if false do it {"}"} </b>.
            </p>
        </div>
        <div className="h3">
            <h3>Rendering content conditionally (JavaScript)</h3>
            <p>Using conditions off the JSX code can be a cleaner way.</p>
            <p>Code:</p>
            <div className="Code">
                <p>Code is inside "ToggleContentJS"</p>
            </div>
            <p>Result:</p>
            <div className="Result">
                <p>
                    <ToggleContentJS></ToggleContentJS>
                </p>
            </div>
        </div>
        <div className="h3">
            <h3>Outputting a list with map</h3>
            <p></p>
            <p>Code:</p>
            <div className="Code">
                <p>Code is inside "OutputtingListWithMap"</p>
            </div>
            <p>Result:</p>
            <div className="Result">
                <p>
                    <OutputtingListWithMap></OutputtingListWithMap>
                </p>
            </div>
        </div>
 



        <h2>Array Manipulation</h2>
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
        <p>Code:</p>
        <div className="Code">
            <p>Code is inside "OutputtingListWithMap"</p>
        </div>
        <p>Result:</p>
        <div className="Result">
            <p>
                <ArrayManipulation></ArrayManipulation>
            </p>
        </div>




        <h2>Component Lifecycle</h2>
        <p>The lyfecycle components are part of the component they are in. These methods help to re-render specific things inside the component.</p>
        <h3>Lifecycle Methods</h3>
        <p><b>Constructor: </b>Good to do one-time setup.</p>
        <p><b>Render: </b>Avoid doing anything besides returning JSX.</p>
        <p><b>componentDidMount: </b>Good place to do data-loading!</p>
        <p><b>componentDidUpdate: </b>Good place to do more data-loading when state/props change.</p>
        <p><b>componentWillUnmount: </b>Good place to do cleanup (Especially for non-React stuff).</p>
        <p><b>shouldComponentUpdate: </b>...</p>
        <p><b>getDerivedStateFromProps: </b>...</p>
        <p><b>getSnapshotBeforeUpdate: </b>...</p>




        <h2>Seasons (Geolocation API)</h2>
        <p>Here we will use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation" target="_blank" title="click here and go to the page">Geolocation API</a>.</p>
        <p>We need to know about <a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation" target="_blank" title="click here and go to the page">Callback functions</a>.</p>
        <p>Inside the Console, we can go to "sensors" option and change the browser geolocalization.</p>
        <Geolocation></Geolocation>
    </div>
}