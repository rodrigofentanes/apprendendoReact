import { TitleStyle } from './style';

export const Title = (props) => {
    return <>
        <TitleStyle>
            {props.children}
        </TitleStyle>
    </>
}