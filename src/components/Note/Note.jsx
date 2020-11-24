import { NoteStyle } from './style';

export const Note = (props) => {
    return <>
        <p><b>Note:</b></p>
        <NoteStyle>
            {props.children}
        </NoteStyle>
    </>
}