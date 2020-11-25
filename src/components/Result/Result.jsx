import { ResultStyle } from './style';
import { LocationLabel } from '../../assets/css/style';

export const Result = (props) => {
    return <>
        <ResultStyle>
            <LocationLabel>Result</LocationLabel>
            {props.children}
        </ResultStyle>
    </>
}