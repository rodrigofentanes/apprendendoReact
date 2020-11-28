
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

export const redux = [
    {
        title:'What is Redux?',
        body:[
            {
                explanation:<>
                    <p>Redux is a state management library.</p>
                    <p>Makes creating complex applications easier.</p>
                    <p>Not required to create a React app!</p>
                    <p>Not explicitly designed to work with React.</p>
                </>
            },
        ]
    },
    {
        title:'Installing with Redux',
        body:[
            {
                explanation:<>
                    <p>We need to install two dependencies to use Redux with React.</p>
                    <p>The first library, called "React-Redux", allows React to communicate with Redux.</p>
                    <p>The second is Redux itself.</p>
                    <p>We can install both at the same time:</p>
                </>
            },
            {
                code:`
                npm install --save redux react-redux
                `
            },
        ]
    },
    {
        title:'Redux Cycle',
        body:[
            {
                explanation:<>
                    <ol>
                        <li>To change state of our app, we call an <b>Action Creator </b>that...</li>
                        <li>produces an <b>Action </b> that...</li>
                        <li>gets fed to <b>dispatch </b>that...</li>
                        <li>forwards the action to <b>Reducers </b>that...</li>
                        <li>creates new <b>State </b>that...</li>
                        <li>wait until we need to update state again.</li>
                    </ol>
                </>
            },
        ]
    },
]