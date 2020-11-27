//class-based views

//functional views

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

export const advanced = [
    {
        title:'HTTP requests',
        body:[
            {
                chapter:'Fetch'
            },
            {
                explanation:<>
                    <p>"Fetch" is a function built into modern browsers, so we dont need to install it. Its a low level function to handler with basic data.</p>
                </>
            },
            {
                chapter:'Axios'
            },
            {
                explanation:<>
                    <p>
                        "Axios" is a stand alone 3rd party package. Uses a more professional approach. 
                        In a nutshell, Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser that also supports the ES6 Promise API.
                    </p>
                    <p>To install axios inside our project, we need to do:</p>
                </>
            },
            {
                code:`
                npm install --save axios
                `
            },
        ]
    },
]