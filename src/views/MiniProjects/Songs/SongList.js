import React, { Component } from "react";
import { connect } from 'react-redux';
import {selectSong} from './actions'

class SongList extends Component {
    
    renderList(){
        return this.props.songs.map((song) => {
            return<React.Fragment key={song.title}>
                <button
                    onClick={() => this.props.selectSong(song)}
                >
                    Select
                </button> 
                <b>{song.title}</b> 
                <hr/>
            </React.Fragment>
        });
    }

    render(){
        //this.props === {songs: state.songs}
        return<>
            <p> {this.renderList()} </p>
        </>
    }
}

const mapStateToProps = (state) => {
    return {songs: state.songs};
}

export default connect(
    mapStateToProps, 
    {selectSong},
)(SongList);