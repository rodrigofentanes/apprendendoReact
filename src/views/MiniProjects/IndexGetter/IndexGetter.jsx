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