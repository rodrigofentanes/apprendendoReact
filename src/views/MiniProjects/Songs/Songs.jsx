import React, {  } from 'react';
// import selectSong from './actions'; // import actions from './actions/index';

import SongList from './SongList'
import SongDetail from './SongDetail'

export const Songs = () => {
    return<>
    <SongDetail></SongDetail>
    <SongList></SongList>
    </>
}
