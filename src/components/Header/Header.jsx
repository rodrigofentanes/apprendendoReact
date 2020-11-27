import {HeaderLinks} from '../HeaderLinks/HeaderLinks';

//css
import './style.css';

export const Header = () => {
    return <>
        <div class="header">
            <a href="/" class="logo">Apprendendo React</a>
            <div class="header-right">
                <HeaderLinks>
                </HeaderLinks>
            </div>
        </div>
    </>
}