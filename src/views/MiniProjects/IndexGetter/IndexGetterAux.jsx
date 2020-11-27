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
            <p>Item: {anyIndex+1}</p>
            <p>Index: {anyIndex}</p>
            <p>{anyItem.obj1}</p>
            <p>{anyItem.obj2}</p>
            <button onClick={() => showIndex(anyIndex) } >Buttom</button>
        </React.Fragment>
    })

    return <>
        <h1>Index Getter</h1>
        <hr/>
        <b>{ activeIndex === 'Any' ? `Any item was clicked` : `Item ${activeIndex+1} was clicked!`}</b>
        <hr/>
        {renderPage}
        <br/>
        <button onClick={() => resetIndex() }>Reset</button>
    </>
}