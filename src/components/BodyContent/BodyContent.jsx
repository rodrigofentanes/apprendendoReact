//assets
import './style.css';
import { LocationLabel } from './style';

export const BodyContent = (props) => {
    return <div className={props.styleName} >
        { props.label && <LocationLabel >{props.label}</LocationLabel>}
        { props.children }
    </div>
}