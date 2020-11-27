//dependencies
import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const MyWiki = () => {
    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([]);

    // see here more about useEffect lifecycle: https://www.udemy.com/course/react-redux/learn/lecture/20787776
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        }
    }, [term])

    useEffect(() => {
        const someHelper = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params: {
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:debouncedTerm,
                }
            });
            setResults(data.query.search);
        }
        debouncedTerm && someHelper();
    }, [debouncedTerm]);

    const goToResultPage = (local) => {
        window.open(`https://en.wikipedia.org?curid=${local}`);
    }

    const renderResults = results.map((result) => {
        return <React.Fragment key={result.pageid}>
            <h4>{result.title}</h4>
            {/* To use the dangerouslySetInnerHTML functionality, you need to trust 100% who provides the HTML */}
            <span dangerouslySetInnerHTML={{ __html: result.snippet}} ></span>
            <br/>
            <button onClick={() => goToResultPage(result.pageid)}>Open</button>
        </React.Fragment>
    })

    return <>
        <h1>MyWiki</h1>
        <input
            placeholder="Search here..."
            value={term}
            onChange={e => setTerm(e.target.value)}
        ></input>
        {renderResults}
    </>
}