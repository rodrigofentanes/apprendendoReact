import { Component } from "react";
import {SearchBar} from './SearchBar';
import {ImageList} from './ImageList';
import unsplash from '../../service/Unsplash';


export default class PuttingAllTogether extends Component {

    state = {
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
            <h1>Photo Searcher</h1>
            <SearchBar 
                onFormSubmit={this.onSearchSubmit} 
            ></SearchBar>
            <p>found: {this.state.images.length} images</p>
            <ImageList
                images={this.state.images}
            ></ImageList>
        </>
    }    
}