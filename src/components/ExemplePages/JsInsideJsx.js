const jsInsideJsx = () => {
    
    function refreshPage(){
        window.location.reload(false);
    }

    return <> 
            <b>{Math.floor(Math.random()*2000)}</b> <br/>
            <button onClick={refreshPage}>Click here to reload the page and change the number above</button>
        </>
}

export default jsInsideJsx;