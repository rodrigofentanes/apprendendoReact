
import { Paragraph } from '../components/Paragraph/Paragraph';
import JsInsideJsx  from '../components/ExemplePages/JsInsideJsx';

const items = [
    {
        id:'IntroducingReact',
        title:'Introducing React',
        body: [
            {
                // Use This pathern to all application
                id:'WhatIsReact',
                chapter:'What Is React?',
                explanation:<>
                    <p>React is a <u>JS Library</u> for building <u>User Interfaces</u>.</p>
                    <p>This user interfaces is build throught <u>components</u>.</p>
                    <p>All React activity happens on the browser.</p>
                </>,
                code: ``,
                result:'',
                note:'',
            },
        ]
    },
    {
        id:'Dependency',
        title:'Dependency',
        body: [
            {
                // Use This pathern to all application
                id:'Babel',
                chapter:'Babel',
                explanation:<>
                    <p>
                        React uses different versions of JavaScript, so the preprocessor <b>Babel </b> 
                        is required to compile and run the code within any brownser.
                    </p>
                    <p>We can enter in <a href="https://babeljs.io/" target="_blank" title="click here and go to the page">babel</a> website and click on <b>try it</b> to check the code and see how it looks like after be converted.</p>
                    <p>Babel converts the JSX code too.</p>
                </>,
                code: ``,
                result:'',
                note:'',
            },
            {
                // Use This pathern to all application
                id:'Webpack',
                chapter:'Webpack',
                explanation:<>
                </>,
                code: ``,
                result:'',
                note:'',
            },
            {
                // Use This pathern to all application
                id:'Dev Server',
                chapter:'Dev Server',
                explanation:<>
                </>,
                code: ``,
                result:'',
                note:'',
            },
        ]
    },
]

export const Home = () => {
    return <>
        <Paragraph
            items={items}
        ></Paragraph>
    </>
}