//components
import { Paragraph } from '../Paragraph/Paragraph';
import { Route } from '../Route';

//css
import './style.css';
import {BodyWrapper} from './style';

//data
import { dataRoutes } from '../../data/dataRoutes'

export const Body = () => {

    const renderRoute = dataRoutes.map((data) => {
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