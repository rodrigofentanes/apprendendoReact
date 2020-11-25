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