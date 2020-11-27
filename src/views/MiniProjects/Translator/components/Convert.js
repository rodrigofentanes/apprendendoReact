// dependencies
import {useState, useEffect} from 'react';
import axios from 'axios';

export const Convert = ({language,text, onDetectedChange}) => {
    const [translated, setTranslated] = useState('')
    const [debouncedText, setDebouncedText] = useState(text)
    
    useEffect(() => {
            const timerId = setTimeout(() => {
                setDebouncedText(text);
            }, 1000);
            return () => {
                clearTimeout(timerId);
            };
    }, [text])

    useEffect(() => {
        const doTransLation = async () => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: text,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslated(data.data.translations[0].translatedText)
            onDetectedChange(data.data.translations[0].detectedSourceLanguage)
        };
        doTransLation();
    }, [language,debouncedText])

    return <>
        <b><span dangerouslySetInnerHTML={{ __html: translated}} ></span></b> 
    </>
}