

export const UserCommentList = () =>{
    return <>
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar"/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    Sam
                </a>
            </div>
            <div className="metadata">
                <span className="date">
                    Today at 6:00pm
                </span>
            </div>
            <div className="text">
                Nice blog!
            </div>
        </div>
    </>
}