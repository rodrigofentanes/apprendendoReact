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

export const api = [
    
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

                    // SETTING 'STATE' HERE OR INSIDE THE CONSTRUCTOR IS THE SAME
                    // BABEL DEPENDENCY CONVERTS THIS CODE BELLOW IN A CONSTRUCTOR
                    state = {
                        lat: null,
                        long: null,
                        errorMessage: '',
                        time: '',
                    };

                    // it was part of lifecycle // this is the right way to do data-loading
                    componentDidMount(){
                        console.log('My component was just mounted!');

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

                    // it was part of lifecycle
                    componentDidUpdate(){
                        console.log('My component was just update - it rerendered!');
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
                    
                    // WE CAN DO TOO // const text = season === 'Winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
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
                    <p>Bellow, we will see the idea construction steps.</p>
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
                
                `
            },
            {
                result:<Translator></Translator>
            },
        ]
    },
]