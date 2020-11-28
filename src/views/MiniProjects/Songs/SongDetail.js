import React, { Component } from "react";
import { connect } from 'react-redux';

const SongDetail = ({song}) => {

    if(!song){
        return<>
            <p>Select a song</p>
        </>
    }

    return<>
        <p><b>Title: </b>{song.title}</p>
        <p><b>Duration: </b>{song.duration}</p>
    </>
    
}

const mapStateToProps = (state) => {
    return {song: state.selectedSong};
}

export default connect(
    mapStateToProps,
)(SongDetail);