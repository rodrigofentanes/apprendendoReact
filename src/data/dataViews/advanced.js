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
    {
        title:'React Hooks',
        body:[
            {
                explanation:<>
                    <p>"Hooks" is a way to write reusable code, instead of more classic techniques like inheritance.</p>
                    <p>We can see more aboute hooks <a href="https://reactjs.org/docs/hooks-reference.html" target="_blank" rel="noreferrer" title="click here and go to the page">here</a>.</p>
                </>
            },
            {
                chapter:'Primitive hooks'
            },
            {
                explanation:<>
                    <p><b>useState:  </b>Hooks is a function that lets you use "state" in a functional component</p>
                    <p><b>useEffect:  </b>Hooks is a function that lets you use something like "lifecycle methods" in a functional component</p>
                    <p><b>useRef:  </b>Hooks is a function that lets you create a "ref" in a function component</p>
                    <p><b>useContext: </b> </p>
                    <p><b>useReducer: </b> </p>
                    <p><b>useCallback: </b> </p>
                    <p><b>useMemo: </b> </p>
                    <p><b>useImperativeHandle: </b> </p>
                    <p><b>useLayoutEffect: </b> </p>
                    <p><b>useDebugValue: </b> </p>
                </>
            },
            {
                chapter:'Custom Hooks'
            },
            {
                explanation:<>
                    <p><b>useCustomHook: </b>Is a union of more than one primitive hook. We can create it.</p>
                </>
            },
        ]
    },
    {
        title:'useState Hook',
        body: [
            {
                explanation:<>
                    <p><b>useState: </b>Returns one value, <b>state</b>, and one function, <b>setState</b>, to update this value.</p>
                    <p><b>initialState</b> is a initial argument/value, so in the first renderization of the page, it will be showed.</p>
                    <p><b>newState</b> is any new argument/value to update the <b>state</b>.</p>
                </>
            },
            {
                code:`
                const [state, setState] = useState(initialState);
                `
            },
            {
                code:`
                setState(newState);
                `
            },
        ]
    },
    {
        title:'useEffect Hook',
        body: [
            {
                explanation:<>
                    <p><b>useEffect: </b>Allows function components to use something like lifecycle meythods.</p>
                    <p>Is possible configure this hook to run some code automatically in one of three scenarios.</p>
                    <ol>
                        <li>When the component is rendered for the first time.</li>
                        <li>When the component is rendered fo the first time and whenever it renders.</li>
                        <li>When the component is rendered fo the first time and whenever it renders and some piece of data has changed.</li>
                    </ol>
                </>
            },
            {
                code:`
                useEffect(() => {
                    console.log('Something');
                });
                `
            },
            {
                code:`
                useEffect(() => {
                    console.log('Something');
                }, [] );
                
                //When the second argument to 'useEffect' is an empty array, which means the function is only executed *once* when the component is first rendered.
                `
            },
            {
                code:`
                useEffect(() => {
                    console.log('Something');
                }, [term] );

                //The useEffect function will be called once when the component is first rendered, then one time for ever re-render.
                `
            },
            {
                code:`
                useEffect(() => {
                    console.log('Something');
                }, [term, otherThing, another, ...] );
                `
            },
            {
                note:<>
                    <p>We are not allowed to 'define' async or await inside the returned useEffect data.</p>
                </>
            },
            {
                code:`
                // ! WE CANNOT DO IT !
                useEffect( async () => {
                    await axios('');
                }, []);
                `
            },
            {
                note:<>
                    <p>To resolve the problem above, we have three solutions:</p>
                    <ol>
                        <li>Make one helper function and then call it.</li>
                        <li>Define a function and invoke it immediately.</li>
                        <li>Use promises.</li>
                    </ol>
                </>
            },
            {
                code:`
                useEffect(() => {
                    const someHelper = async () => {
                        await axios.get('');
                    }
                    someHelper();
                }, []);
                `
            },
            {
                code:`
                useEffect(() => {
                    (
                        async () => {
                            await axios.get('');
                        }
                    )();
                }, []);
                `
            },
            {
                code:`
                useEffect(() => {
                    axios.get('')
                        .then((response) => {
                            console.log(response.data);
                        });
                }, []);
                `
            },          
        ]
    },
]