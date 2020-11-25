import { ExplanationStyle } from './style';
import { LocationLabel } from '../../assets/css/style';

export const Explanation = (props) => {
    return <>
        <ExplanationStyle>
            <LocationLabel>Explanation</LocationLabel>
            {props.children}
        </ExplanationStyle>
    </>
}