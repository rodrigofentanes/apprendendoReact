import { ResultStyle } from './style';

export const Result = (props) => {
    return <>
        <p><b>Result:</b></p>
        <ResultStyle>
            {props.children}
        </ResultStyle>
    </>
}