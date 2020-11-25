import { Result } from '../Result/Result';
import { Note } from '../Note/Note';
import { Code } from '../Code/Code';
import { Chapter } from '../Chapter/Chapter';
import { Title } from '../Title/Title';
import { Explanation } from '../Explanation/Explanation';
import ReactMarkdown from 'react-markdown';

// hashmap ?
// list, key and content ?
// dado -> padrao de dado -> componente -> renderização
// componetização

export const Paragraph = ({items}) => {
    const renderTitle = items.map( item => {
        const renderBody = item.body.map(body => {
            return <>      
                {body.chapter ? <><Chapter>{body.chapter}</Chapter><hr/></> : <></>}
                {body.explanation ? <Explanation>{body.explanation}</Explanation> : <></>}
                {body.code ? <Code><ReactMarkdown source={body.code}/></Code> : <></>}
                {body.result ? <Result>{body.result}</Result> : <></>}
                {body.note ? <Note>{body.note}</Note> : <></> }
            </>
        });
        return <div key={item.title}>
            { item.title ? <Title>{item.title}</Title> : <br/> }
            {renderBody}
        </div>
    });

    return <> 
        {renderTitle}
    </>
}