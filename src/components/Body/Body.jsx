//components
import { Paragraph } from '../Paragraph/Paragraph';
import { Route } from '../Route';

//css
import './style.css';
import {BodyWrapper} from './style';

//data
import { dataRoute } from '../../data/dataRoute'

export const Body = () => {

    const renderRoute = dataRoute.map((data) => {
        return <>
            <Route path={data.route}>
                <Paragraph
                    items={data.rBody}
                ></Paragraph>
            </Route>
        </>
    })

    return <>
        <BodyWrapper>
            {renderRoute}
        </BodyWrapper>
    </>
}