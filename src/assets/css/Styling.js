import styled from 'styled-components';

export const ScreenBox = styled.div`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    padding: 15px;
`

export const CodeBlock = styled.div`
    font-family: 'Courier New', Courier, monospace;
    background-color: black;
    color: green;
    margin: 1.0em;
    margin-left: 0;
    padding: 1px;
    padding-left: 1.2em;
    font-size: 1.1em;
`

export const Note = styled.div`
    background-color: yellow;
    padding: 1.2px;
    padding-bottom: .2em;
`


export const ImageWrapper = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    margin-bottom: 15px;
    transition: width 1s;
`

export const TextInput = {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
};
