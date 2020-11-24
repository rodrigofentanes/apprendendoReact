import {Content, Polaroid} from './ApprovalCard';

const avatarImg = {
    width: '100%',
};

const container = {
    textAlign: 'center',
    padding: '15px 10px',
    paddingBottom: '20px',
};

const comment = {
    display: 'flex',
    marginTop:'0',
    marginBottom:'10px',
};

export const UserComment = props => {
    return<> 
        <p>{props.children}</p>
        <div className="comment" style={comment}>
            <Polaroid>
                <a href="/">
                    <img src={props.img} alt="avatar" style={avatarImg}/>
                </a>
                <div style={container}>
                    <a href="/">{props.author}</a>
                </div>
            </Polaroid>
            <Content>
                <div className="metadata">
                    <span className="date">
                        {props.time}
                    </span>
                </div>
                <hr/>
                <div className="text">
                    {props.comment}
                </div>
            </Content>
        </div>
    </>
}