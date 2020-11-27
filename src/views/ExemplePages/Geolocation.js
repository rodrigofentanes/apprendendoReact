import { Component } from "react";
import { SeasonsDisplay } from "./SeasonDisplay";

export default class Geolocation extends Component{
    // ! WE CAN CALL THE CONSTRUCTOR TO SETTING 'STATE' !
    // constructor(props){
    //     // we must have to call super(props)
    //     super(props);
    //     // this is the ONLY time that we do direct assignment to STATE // ALL the others state assignments is by the setState function
    //     this.state = {
    //         lat: null,
    //         long: null,
    //         errorMessage: '',
    //     };
    //
    //     // ! WE CAN DO IT HERE TO !
    //     // window.navigator.geolocation.getCurrentPosition(
    //     //     // Here are two callbacks function
    //     //     (position) => {
    //     //         this.setState({
    //     //             lat: position.coords.latitude,
    //     //             long: position.coords.longitude,
    //     //         })
    //     //     },
    //     //     (err) => {
    //     //         this.setState({
    //     //             errorMessage: err.message,
    //     //         })
    //     //     }
    //     // );
    // }

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

        // ! UNCOMMENT THIS TO SEE componentDidUpdate() WORKING !
        // setInterval(
        //     () => {
        //         this.setState({
        //             time: new Date().toLocaleTimeString()
        //         })
        //     }, 
        //     1000
        // )
    }

    // // it was part of lifecycle
    // componentDidUpdate(){
    //     console.log('My component was just update - it rerendered!');
    // }

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
        // ! WE CAN DO IT HERE TO !
        // window.navigator.geolocation.getCurrentPosition(
        //     (position) => console.log(position),
        //     (err) => console.log(err)
        // );
        // ! ATTENTION !
        // DO // position => console.log(position) 
        // AND // err => console.log(err) 
        // is the same


        // ! WE CAN DO IT HERE TO !
        // if(this.state.errorMessage && !this.state.lat) {
        //     return <>
        //         <p><b>Error Message:</b> {this.state.errorMessage} </p>
        //     </>
        // }
        // if(!this.state.errorMessage && this.state.lat) {
        //     return <>
        //         <SeasonsDisplay
        //             lat={this.state.lat}
        //             long={this.state.long}
        //         ></SeasonsDisplay>
        //     </>
        // }
        // return <>
        //     LOADING!
        // </>


        return <>
        <h1>Seasons</h1>
            {/* ! UNCOMMENT THIS TO SEE componentDidUpdate() WORKING ! */}
            {/* <p><b>Local time is: </b>{this.state.time}</p> */}
            {this.renderContent()}
        </>
    }
}