import { NoteStyle } from './style';
import { LocationLabel } from '../../assets/css/style';

export const Note = (props) => {
    return <>
        <NoteStyle>
            <LocationLabel>Note</LocationLabel>
            {props.children}
        </NoteStyle>
    </>
}