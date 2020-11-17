import {Component} from "react";

export default class CssInlineStyle extends Component {

    render() {
        const ourStyle = {
            backGroundColor: 'green',
            font: 'inherit',
            border: '3px solid red',
            padding: '8px',
            cursor: 'cell'
        };

        return <>
            <button style={ourStyle} >This is one inline styled button</button>
        </>
    }
}