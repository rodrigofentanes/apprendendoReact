import {UserComment} from './UserComment';
import {ApprovalCard} from './ApprovalCard';
import faker from 'faker';
import { Component } from 'react';


export default class UserCommentList extends Component {
    render() {
        return <>
            <h3>Approved</h3>
            <UserComment
                author={faker.name.findName()}
                time={'this time'}
                comment={'nice!'}
                img={faker.image.animals()}
            > 
                Comment:
            </UserComment>

            <br/><br/>

            <h3>Waiting approval</h3>
            {/* This is a perfect exemple of Reusability */}
            <ApprovalCard
            >
                <UserComment
                    author={faker.name.findName()}
                    time={'this time'}
                    comment={'nice!'}
                    img={faker.image.animals()}
                >
                    Comment:
                </UserComment>
            </ApprovalCard>
        </>
    }   
}