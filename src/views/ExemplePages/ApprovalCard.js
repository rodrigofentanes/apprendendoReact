import styled from 'styled-components'

export const Content = styled.div`
    width:  100%;
    background-color:  white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 25px;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 15px;
    margin-right: 15px;
    padding: 10px;
`

export const Polaroid = styled.div`
    width: 200px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 25px;
    margin-top: 0;
    margin-bottom: 0;
`

export const ApprovalCard = props => {

    const approve = {
        backgroundColor: 'green',
    }
    const reject = {
        backgroundColor: 'red',
    }

    return<> 
        {props.children}
        <button style={approve}>Approve</button>
        <button style={reject}>Reject</button>
    </>
}