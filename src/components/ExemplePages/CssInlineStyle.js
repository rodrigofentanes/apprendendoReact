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