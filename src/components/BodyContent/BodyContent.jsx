import './style.css';
import { LocationLabel } from '../../assets/css/style';

export const BodyContent = (props) => {
    return <div className={props.styleName} >
        { props.label && <LocationLabel >{props.label}</LocationLabel>}
        { props.children }
    </div>
}