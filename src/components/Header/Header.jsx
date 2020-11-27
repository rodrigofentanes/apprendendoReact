//
import {dataRoute} from '../../data/dataRoute';

//css
import './style.css';

export const Header = () => {

    const renderButtons = dataRoute.map((data) => {
        return <>
            <a class={ window.location.pathname === data.route && "active" } href={data.route}>{data.pageName}</a>
        </>
    })

    return <>
        <div class="header">
            <a href="/" class="logo">Apprendendo React</a>
            <div class="header-right">
                {renderButtons}
            </div>
        </div>
    </>
}