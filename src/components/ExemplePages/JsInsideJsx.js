const jsInsideJsx = () => {
    
    function refreshPage(){
        window.location.reload(false);
    }

    function getTime(){
        return (new Date()).toLocaleTimeString()
    }

    return <> 
            <b>{Math.floor(Math.random()*2000)}</b> <br/>
            <button onClick={refreshPage}>Click here to reload the page and change the number above</button> 
            <p>Out of curiosity, see how JS get the current time:</p>
            <b>{getTime()}</b>
        </>
}

export default jsInsideJsx;