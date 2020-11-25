import { CodeStyle } from './style';
import { LocationLabel } from '../../assets/css/style';

export const Code = (props) => {
    return <>
        <CodeStyle>
            <LocationLabel>Code</LocationLabel>
            {props.children}
        </CodeStyle>
    </>
}