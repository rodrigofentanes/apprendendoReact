import { BodyContent } from '../BodyContent/BodyContent';
import '../BodyContent/style.css';
import { Title } from '../Title/Title';
import ReactMarkdown from 'react-markdown';

// hashmap ?
// list, key and content ?
// dado -> padrao de dado -> componente -> renderização
// componetização

export const Paragraph = ({items}) => {
    const renderTitle = items.map( (item, index) => {
        const renderBody = item.body.map(body => {
            return <>      
                {body.chapter && <><BodyContent label="" styleName="ChapterStyle">{body.chapter}</BodyContent><hr/></> }
                {body.explanation && <BodyContent label="Explanation" styleName="ExplanationStyle">{body.explanation}</BodyContent>}
                {body.code && <BodyContent label='Code' styleName="CodeStyle" ><ReactMarkdown source={body.code}/></BodyContent>}
                {body.result && <BodyContent label="Result" styleName="ResultStyle">{body.result}</BodyContent>}
                {body.note && <BodyContent label="Note" styleName="NoteStyle">{body.note}</BodyContent>}
            </>
        });
        return <div key={index}>
            { item.title ? <Title>{`${index+1} - ${item.title} `}</Title> : <br/> }
            {renderBody}
        </div>
    });

    return <> 
        {renderTitle}
    </>
}