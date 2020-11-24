import {Note} from '../assets/css/Styling';


export const Hooks = () => {
    return <>
        <h2>React Hooks</h2>
        <p><b>useState:  </b>Hooks is a function that lets you use "state" in a functional component</p>
        <p><b>useEffect:  </b>Hooks is a function that lets you use something like "lifecycle methods" in a functional component</p>
        <p><b>useRef:  </b>Hooks is a function that lets you create a "ref" in a function component</p>
        <Note>Hooks are a way to write reusable code, instead of more classic techniques like inheritance.</Note>

        <h3>Primitive Hooks</h3>
        <p><b>useState: </b> </p>
        <p><b>useEffect: </b> </p>
        <p><b>useContext: </b> </p>
        <p><b>useReducer: </b> </p>
        <p><b>useCallback: </b> </p>
        <p><b>useMemo: </b> </p>
        <p><b>useRef: </b> </p>
        <p><b>useImperativeHandle: </b> </p>
        <p><b>useLayoutEffect: </b> </p>
        <p><b>useDebugValue: </b> </p>

        <h3>Custom Hook</h3>
        <p><b>useCustomHook: </b>useState, useEffect... </p>

    </>
}