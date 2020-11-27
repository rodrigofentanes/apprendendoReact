//class-based views
import Geolocation from '../../views/ExemplePages/Geolocation';
import PuttingAllTogether from '../../views/ExemplePages/PuttingAllTogether';

//functional views
import { MyWiki } from '../../views/MiniProjects/MyWiki/MyWiki';
import { Translator } from '../../views/MiniProjects/Translator/Translator';

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

export const apis = [
    
    {
        title:'Seasons',
        body:[
            {
                explanation:<>
                    <p>Here we will use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation" target="_blank" rel="noreferrer" title="click here and go to the page">Geolocation API</a>.</p>
                    <p>We need to know about <a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation" target="_blank" rel="noreferrer" title="click here and go to the page">Callback functions</a>.</p>
                    <p>Inside the Console, we can go to "sensors" option and change the browser geolocalization.</p>
                </>
            },
            {
                code:`
                import { Component } from "react";
                import { SeasonsDisplay } from "./SeasonDisplay";

                export default class Geolocation extends Component{

                    state = {
                        lat: null,
                        long: null,
                        errorMessage: '',
                        time: '',
                    };

                        window.navigator.geolocation.getCurrentPosition(
                            // Here are two callbacks function
                            (position) => {
                                this.setState({
                                    lat: position.coords.latitude,
                                    long: position.coords.longitude,
                                })
                            },
                            (err) => {
                                this.setState({
                                    errorMessage: err.message,
                                })
                            }
                        );
                    }

                    renderContent() {
                        if(this.state.errorMessage && !this.state.lat) {
                            return <>
                                <p><b>Error Message:</b> {this.state.errorMessage} </p>
                            </>
                        }

                        if(!this.state.errorMessage && this.state.lat) {
                            return <>
                                <SeasonsDisplay
                                    lat={this.state.lat}
                                    long={this.state.long}
                                ></SeasonsDisplay>
                            </>
                        }

                        return <>
                            LOADING!
                        </>
                    }

                    render(){


                        return <>
                            {/* ! UNCOMMENT THIS TO SEE componentDidUpdate() WORKING ! */}
                            {/* <p><b>Local time is: </b>{this.state.time}</p> */}
                            {this.renderContent()}
                        </>
                    }
                }
                `
            },
            {
                code:`
                import '../../assets/css/SeasonDisplay.css';

                const seasonConfig = {
                    Summer: {
                        text: "Let's hit the beach!",
                    },
                    Winter: {
                        text: "Burr, it is chilly!",
                    },
                }

                const getSeason = (lat, month) => {
                    if (month > 2 && month < 9){
                        return lat > 0 ? 'Summer' : 'Winter';
                    } else {
                        return lat > 0 ? 'Winter' : 'Summer';
                    }
                }

                export const SeasonsDisplay = (props) => {
                    const season = getSeason(props.lat, new Date().getMonth());
                    
                    const {text} = seasonConfig[season]; // here we get only the text propertie

                    return <>
                        <p><b>Latitude:</b> {props.lat} </p>
                        <p><b>Longitude:</b> {props.long} </p>
                        {/* NOTE THIS WAY OF PASS CSS DYNAMICALLY */}
                        <p className={'anyOne '+season}><b>The season is: </b> "{season}" so "{text}"</p> 
                    </>
                }
                `
            },
            {
                result:<Geolocation/>
            },
        ]
    },
    {
        title:'Photo Searcher',
        body:[
            {
                explanation:<>
                    <p>Here, we will consume an external API, start to making a better use of the containers and other good pratices.</p>
                </>
            },
            {
                code:`
                import { Component } from "react";
                import SearchBar from './SearchBar';
                import {ImageList} from './ImageList';
                import unsplash from '../../service/Unsplash';


                export default class PuttingAllTogether extends Component {

                    state = {
                        // empty array
                        images:[],
                    };

                    onSearchSubmit = async (term) => {
                        const anyResponse = await unsplash
                            .get('/search/photos',
                            {
                                params:{
                                    query: term,
                                },
                            }
                        );
                        this.setState({
                            images: anyResponse.data.results,
                        });
                    }

                    render(){
                        return<>
                            <SearchBar 
                                onSubmit={this.onSearchSubmit} 
                            ></SearchBar>
                            <p>found: {this.state.images.length} images</p>
                            <ImageList
                                images={this.state.images}
                            ></ImageList>
                        </>
                    }    
                }
                `
            },
            {
                code:`
                import { Component } from "react";
                import { TextInput } from '../../assets/css/Styling';

                export default class SearchBar extends Component {

                    state = {
                        term: '',
                    }

                    onFormSubmit = e => {
                        e.preventDefault(); // this code prevents page reload before hit the enter on input tag
                        this.props.onSubmit(this.state.term);
                    }

                    render(){
                        return<>
                        <form onSubmit={this.onFormSubmit}> {/* passing data to parent PuttingAllTogether */}
                            <label>Search:</label>
                            <input 
                                type="text"
                                value={this.state.term}
                                onChange={e => this.setState({ term: e.target.value })} 
                                style={TextInput} 
                                placeholder="Search here..."
                            ></input>
                        </form>
                            
                        </>
                    }    
                }
                `
            },
            {
                code:`
                import {ImageWrapper} from '../../assets/css/Styling';

                export const ImageList = (props) => {

                    // We can destructuring to short typing
                    const images = props.images.map(({alt_description, id, urls}) => {
                        return <ImageWrapper 
                            alt={alt_description}
                            key={id}
                            src={urls.regular} 
                        />
                    });

                    return <>
                        {console.log(props.images)}
                        {images}
                    </>
                };
                `
            },
            {
                code:`
                import axios from 'axios';

                export default axios.create({
                    baseURL: 'https://api.unsplash.com',
                    headers: {
                        Authorization:'Client-ID 5skIVtgZGKpuBwGbNgjxxO-5_tkIyaUfYuYGNlO1EQ0',
                    },
                });
                `
            },
            {
                result:<PuttingAllTogether/>
            },
        ]
    },
    {
        title:'MyWiki',
        body:[
            {
                explanation:<>
                    <p>We will consum the <a href="https://www.mediawiki.org/wiki/API:Search" target="_blank" rel="noreferrer" title="click here and go to the page">wikipédia search API</a> .</p>
                </>
            },
            {
                code:`
                //dependencies
                import React, {useState, useEffect} from 'react';
                import axios from 'axios';
                
                export const MyWiki = () => {
                    const [term, setTerm] = useState('');
                    const [debouncedTerm, setDebouncedTerm] = useState(term)
                    const [results, setResults] = useState([]);
                
                    // see here more about useEffect lifecycle: https://www.udemy.com/course/react-redux/learn/lecture/20787776
                    useEffect(() => {
                        const timerId = setTimeout(() => {
                            setDebouncedTerm(term);
                        }, 1000);
                
                        return () => {
                            clearTimeout(timerId);
                        }
                    }, [term])
                
                    useEffect(() => {
                        const someHelper = async () => {
                            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                                params: {
                                    action:'query',
                                    list:'search',
                                    origin:'*',
                                    format:'json',
                                    srsearch:debouncedTerm,
                                }
                            });
                            setResults(data.query.search);
                        }
                        debouncedTerm && someHelper();
                    }, [debouncedTerm]);
                
                    const goToResultPage = (local) => {
                        window.open(\`https://en.wikipedia.org?curid=\${local}\`);
                    }
                
                    const renderResults = results.map((result) => {
                        return <React.Fragment key={result.pageid}>
                            <h4>{result.title}</h4>
                            {/* To use the dangerouslySetInnerHTML functionality, you need to trust 100% who provides the HTML */}
                            <span dangerouslySetInnerHTML={{ __html: result.snippet}} ></span>
                            <br/>
                            <button onClick={() => goToResultPage(result.pageid)}>Open</button>
                        </React.Fragment>
                    })
                
                    return <>
                        <h1>MyWiki</h1>
                        <input
                            placeholder="Search here..."
                            value={term}
                            onChange={e => setTerm(e.target.value)}
                        ></input>
                        {renderResults}
                    </>
                }
                `
            },
            {
                result:<MyWiki></MyWiki>
            },
        ]
    },
    {
        title:'Translator',
        body:[
            {
                code:`
                // dependencies
                import {useState} from 'react';

                // components
                import { Dropdown } from './components/Dropdown';
                import { Convert } from './components/Convert';
                import { LanguagesList } from './data/LanguagesList';

                //*****************WARNING*******************
                //*******************************************
                // This is a paid API.
                // Only works for free on localhost:3000
                // https://cloud.google.com/translate/docs/reference/rest/v2/translate
                //*******************************************

                export const Translator = () => {
                    const [language, setLanguage] = useState(LanguagesList[0]);
                    const [text, setText] = useState('');
                    const [detected, setDetected] = useState('');

                    const renderLanguage = LanguagesList.map((lang) => {
                        if(lang.value===detected){
                            return <>{lang.label}</>
                        }

                        return null
                    })

                    return <>
                        <h1>Translator</h1>
                        <label>Enter a text:</label> <br/>
                        <input 
                            placeholder='type here...'
                            value = {text} 
                            onChange = {(e) => setText(e.target.value)}
                        ></input> <br/>
                        <p>Language detected is: <b> { renderLanguage } </b></p>
                        <hr/>
                        <Dropdown
                            label="Translate to:: "
                            options={LanguagesList}
                            selected={language}
                            onSelectedChange={setLanguage}
                        ></Dropdown>
                        <hr/>
                        <label>Translation:</label> <br/>
                        <Convert
                            text={text}
                            language={language}
                            onDetectedChange={setDetected}
                        ></Convert>
                    </>
                }
                `
            },
            {
                code:`
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
                `
            },
            {
                code:`
                // dependencies
                import {useState, useEffect} from 'react';
                import axios from 'axios';

                export const Convert = ({language,text, onDetectedChange}) => {
                    const [translated, setTranslated] = useState('')
                    const [debouncedText, setDebouncedText] = useState(text)
                    
                    useEffect(() => {
                            const timerId = setTimeout(() => {
                                setDebouncedText(text);
                            }, 1000);
                            return () => {
                                clearTimeout(timerId);
                            };
                    }, [text])

                    useEffect(() => {
                        const doTransLation = async () => {
                            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                                params: {
                                    q: text,
                                    target: language.value,
                                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                                }
                            });
                            setTranslated(data.data.translations[0].translatedText)
                            onDetectedChange(data.data.translations[0].detectedSourceLanguage)
                        };
                        doTransLation();
                    }, [language,debouncedText])

                    return <>
                        <b><span dangerouslySetInnerHTML={{ __html: translated}} ></span></b> 
                    </>
                }
                `
            },
            {
                result:<Translator></Translator>
            },
        ]
    },
]