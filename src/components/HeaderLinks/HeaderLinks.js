import React, { useState } from 'react'


//data
import {dataRoutes} from '../../data/dataRoutes';

export const HeaderLinks = () => {

    const [route, setRoute] = useState(window.location.pathname)

    const renderButtons = dataRoutes.map((data) => {
        const onClick = (e) => {
            if(e.metaKey || e.ctrlKey){
                return;
            };

            e.preventDefault();
            window.history.pushState({}, '', data.route);

            const navEvent = new PopStateEvent('popstate');
            window.dispatchEvent(navEvent);
            setRoute(window.location.pathname);
        };


        return <>
            <a 
                class={ route === data.route && "active" } 
                href={data.route}
                onClick={onClick}
            >
                {data.pageName}
            </a>
        </>
    })

    return <>
        {renderButtons}
    </>
}
