//class-based views
import CssInlineStyle from '../../views/ExemplePages/CssInlineStyle';
import UserCommentList from '../../views/ExemplePages/UserCommentList';

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

export const styling = [
    {
        title:'Styling components',
        body: [
            {
                explanation:<>
                    <p>We will see two ways of styling implement. </p>
                    <p>The <b>first</b> way is create one css file and import it, see:</p>
                </>
            },
            {
                code:`
                import './PATH/TO/THE/CSS_FILE'
                `
            },
            {
                note:<>
                    <p>We can use single or double quotes to pass an style name but by convention we use single quotes.</p>
                    <p>We can easily make JSX reference to JS variables and we do it putting a JS code into a curly braces block.</p>
                </>
            },
            {
                explanation:<>
                    <p>The <b>second</b> way is called "Inline Style" and is usefull when we want to give style into one specific scope, see:</p>
                </>
            },
            {
                code:`
                import {Component} from 'react';

                export default class CssInlineStyle extends Component {

                    render() {
                        const ourStyle = {
                            backGroundColor: 'green',
                            font: 'inherit',
                            border: '3px solid red',
                            padding: '8px',
                            cursor: 'cell'
                        };

                        const buttonText = 'This is a inline stylized button';
                        
                        function getButtonText(){
                            return 'Click on me';
                        } 

                        return <>
                            <button style={ourStyle} >
                                {buttonText}
                            </button>
                            <br/>
                            <button style={ourStyle} >
                                {getButtonText()}
                            </button>
                        </>
                    }
                }
                `
            },
            {
                result:<CssInlineStyle></CssInlineStyle>
            },
        ]
    },
    {
        title:'Advanced Styling',
        body:[
            {
                explanation:<>
                    <p>In this example we use the Faker library. See more in <a href="https://github.com/Marak/faker.js" target="_blank" rel="noreferrer" title="click here and go to the page">Faker.js</a></p>
                    <p>We need to install the dependency "styled-components" to use this type of styling.</p> 
                </>
            },
            {
                code:`
                npm install styled-components --save
                `
            },
            {
                explanation:<>
                    <p>Analyze the class below:</p>
                </>
            },
            {
                code:`
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
                `
            },
            {
                code:`
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
                `
            },
            {
                code:`
                import styled from 'styled-components'

                export const Content = styled.div\`
                    width:  100%;
                    background-color:  white;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    margin-bottom: 25px;
                    margin-top: 0;
                    margin-bottom: 0;
                    margin-left: 15px;
                    margin-right: 15px;
                    padding: 10px;
                \`

                export const Polaroid = styled.div\`
                    width: 200px;
                    background-color: white;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    margin-bottom: 25px;
                    margin-top: 0;
                    margin-bottom: 0;
                \`

                export const ApprovalCard = props => {

                    const approve = {
                        backgroundColor: 'green',
                    }
                    const reject = {
                        backgroundColor: 'red',
                    }

                    return<> 
                        {props.children}
                        <button style={approve}>Approve</button>
                        <button style={reject}>Reject</button>
                    </>
                }
                `
            },
            {
                result:<UserCommentList/>
            },
            {
                note:<>
                    <p>Inside this code above we have a perfect example of Reusability.</p>
                </>
            },
        ]
    },
]