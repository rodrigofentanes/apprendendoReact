import { Component } from "react";
import {} from '../../assets/css/Styling';
import SearchBar from './SearchBar';
import {ImageList} from './ImageList';
import unsplash, {} from '../../service/Unsplash';


export default class PuttingAllTogether extends Component {

    state = {
        // empty array
        images:[],
    };

    // ! THIS IS ONE WAY  TO GET REQUEST !
    // onSearchSubmit(term) {
    //     axios
    //         .get('https://api.unsplash.com/search/photos', // Request address
    //         // bunch of configurations
    //         {
    //             params:{
    //                 query: term,
    //             },
    //             headers: {
    //                 Authorization:'Client-ID 5skIVtgZGKpuBwGbNgjxxO-5_tkIyaUfYuYGNlO1EQ0',
    //             },
    //         }
    //     // this is a "PROMISE" // PROMISE is an object that will essentially give us a little notification when some amount of work, like a network request, is completed.
    //     ).then((anyResponse) => { 
    //         console.log(anyResponse.data.results);
    //     });
    // }

    // ! THIS IS OTHER WAY TO GET REQUEST !
    // async type allows us to use the 'async' or 'await' syntax inside this function
    // thats allows us to make asynchronous request
    // async onSearchSubmit(term) {
    //     const anyResponse = await axios
    //         .get('https://api.unsplash.com/search/photos',
    //         {
    //             params:{
    //                 query: term,
    //             },
    //             headers: {
    //                 Authorization:'Client-ID 5skIVtgZGKpuBwGbNgjxxO-5_tkIyaUfYuYGNlO1EQ0',
    //             },
    //         }
    //     );
    //     console.log(anyResponse.data.results);
    // }

    // ! THIS IS OTHER WAY TO GET REQUEST !
    // onSearchSubmit = async (term) => {
    //     const anyResponse = await axios
    //         .get('https://api.unsplash.com/search/photos',
    //         {
    //             params:{
    //                 query: term,
    //             },
    //             headers: {
    //                 Authorization:'Client-ID 5skIVtgZGKpuBwGbNgjxxO-5_tkIyaUfYuYGNlO1EQ0',
    //             },
    //         }
    //     );
    //     this.setState({
    //         images: anyResponse.data.results,
    //     });
    // }

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