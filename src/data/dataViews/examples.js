//class-based views

//functional views
import { IndexGetter } from '../../views/MiniProjects/IndexGetter/IndexGetter';

// ******************************
// ********ALLOWED ITEMS*********
// title: '',
// body: [],
//  //   chapter: '',
//  //   explanation:<></>,
//  //   code: ``,
//  //   result:<></>,
//  //   note:<></>,
// ******************************

export const examples = [
    {
        title:'Index Getter',
        body:[
            {
                code:`
                // functional views
                import { IndexGetterAux } from './IndexGetterAux';

                const items = [
                    {
                        obj1:'anything',
                        obj2:'everything',
                    },
                    {
                        obj1:'anything2',
                        obj2:'everything2',
                    },
                    
                    {
                        obj1:'anything3',
                        obj2:'everything3',
                    },
                ]

                export const IndexGetter = () => {
                    return <>
                        <IndexGetterAux items={items} ></IndexGetterAux>
                    </>
                }
                `
            },
            {
                code:`
                import React, {useState} from 'react';

                export const IndexGetterAux = ({items}) => {

                    const [activeIndex, setActiveIndex] = useState('Any'); 

                    const showIndex = (index) => {
                        setActiveIndex(index);
                    }

                    const resetIndex = () => {
                        setActiveIndex('Any');
                    }

                    const renderPage = items.map((anyItem, anyIndex) => {
                        return <React.Fragment key={anyIndex}>
                            <p>{anyIndex}</p>
                            <p>{anyItem.obj1}</p>
                            <p>{anyItem.obj2}</p>
                            <button onClick={() => showIndex(anyIndex) } >Buttom</button>
                        </React.Fragment>
                    })

                    return <>
                        <p> { activeIndex === 'Any' ? \`Any item was clicked\` : \`Item \${activeIndex} was clicked!\`} </p>
                        {renderPage}
                        <br/>
                        <button onClick={() => resetIndex() }>Reset</button>
                    </>
                }
                `
            },
            {
                result:<IndexGetter></IndexGetter>
            },
        ]
    },
]