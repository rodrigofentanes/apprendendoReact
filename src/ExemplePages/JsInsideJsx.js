const jsInsideJsx = () => {
return <div>
    <h2>We need to use curly braces {"{ }"} to use JS sintax inside on the JSX:</h2>
    <p>The sintax code is: <b>{"{"}Math.floor(Math.random()*2000){"}"}</b></p> 
    <p>The result will be random: <b>{Math.floor(Math.random()*2000)}</b></p>
</div>
}

export default jsInsideJsx;