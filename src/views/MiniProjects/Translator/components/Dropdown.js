//dependencies
import {useState, useEffect, useRef} from 'react';

//css
import '../assets/translator.css';

export const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (e) => {
            if (ref.current.contains(e.target)){
                return;
            }
            setOpen(false);
        };
        
        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []);

    const renderedOptions = options.map((option) => {
        if(option.value === selected.value){
            return null;
        }
        return <>
            <div
                key={option.value}
                onClick={() => onSelectedChange(option)}
            >
                <button>{option.label}</button>
            </div>
        </>
    });

    return <>
        <div ref={ref}>
            <div onClick={() => setOpen(!open)}>
                <div>
                    {label}
                    <b>{selected.label}</b> <br/>
                    <button>change language</button>
                </div>
                <table className={ open ? 'visible' : 'not-visible'} >
                    <tbody>
                        <tr>
                            <td>{renderedOptions}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
}