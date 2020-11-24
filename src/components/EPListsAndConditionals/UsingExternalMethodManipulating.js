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