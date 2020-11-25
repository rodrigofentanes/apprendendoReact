export const TwoWayBindForm = (props) => {
    return (<>
        <label>{props.children}</label> <br/>
        <input type="text" onChange={props.changed} value={props.propertie} /> <br/><br/>    
        <button onClick={props.click}>Using a parent method to change properties</button>
    </>)
};