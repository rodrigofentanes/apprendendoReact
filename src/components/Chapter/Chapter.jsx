import { ChapterStyle } from './style';

export const Chapter = (props) => {
    return <>
        <ChapterStyle>
            {props.children}
        </ChapterStyle>
    </>
}