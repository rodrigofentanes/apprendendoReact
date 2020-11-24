import { CodeStyle } from './style';

export const Code = (props) => {
    return <>
        <p><b>Code:</b></p>
        <CodeStyle>
            {props.children}
        </CodeStyle>
    </>
}