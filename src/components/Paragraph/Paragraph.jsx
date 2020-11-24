import { Result } from '../Result/Result'
import { Note } from '../Note/Note'
import { Code } from '../Code/Code'
import ReactMarkdown from 'react-markdown';

export const Paragraph = ({items}) => {

    const renderTitle = items.map( item => {
        const renderBody = item.body.map(body => {
            return <>
                <h3>{body.chapter}</h3>
                
                {body.explanation ? body.explanation : <br/>}
                {body.code ? <Code><ReactMarkdown source={body.code}/></Code> : <br/>}
                {body.result ? <Result>{body.result}</Result> : <br/>}
                {body.note ? <Note>{body.note}</Note> : <br/>}
                
            </>
        });

        return <div key={item.title}>
            <h2>{item.title}</h2>
            {renderBody}
        </div>
    });

    return <> 
        {renderTitle}
    </>
}