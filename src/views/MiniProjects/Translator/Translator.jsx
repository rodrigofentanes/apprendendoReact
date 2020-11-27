// dependencies
import {useState} from 'react';

// components
import { Dropdown } from './components/Dropdown';
import { Convert } from './components/Convert';
import { LanguagesList } from './data/LanguagesList';

//*****************WARNING*******************
//*******************************************
// This is a paid API.
// Only works for free on localhost:3000
// https://cloud.google.com/translate/docs/reference/rest/v2/translate
//*******************************************

export const Translator = () => {
    const [language, setLanguage] = useState(LanguagesList[0]);
    const [text, setText] = useState('');
    const [detected, setDetected] = useState('');

    const renderLanguage = LanguagesList.map((lang) => {
        if(lang.value===detected){
            return <>{lang.label}</>
        }

        return null
    })

    return <>
        <h1>Translator</h1>
        <label>Enter a text:</label> <br/>
        <input 
            placeholder='type here...'
            value = {text} 
            onChange = {(e) => setText(e.target.value)}
        ></input> <br/>
        <p>Language detected is: <b> { renderLanguage } </b></p>
        <hr/>
        <Dropdown
            label="Translate to:: "
            options={LanguagesList}
            selected={language}
            onSelectedChange={setLanguage}
        ></Dropdown>
        <hr/>
        <label>Translation:</label> <br/>
        <Convert
            text={text}
            language={language}
            onDetectedChange={setDetected}
        ></Convert>
    </>
}