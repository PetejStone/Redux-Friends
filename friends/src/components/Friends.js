import React from 'react';
import {getFriends, deleteFriend} from '../actions';
import {connect} from 'react-redux';

class Friends extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        this.props.getFriends()
    }

    deleteFriend = id => {
        console.log(id)
        this.props.deleteFriend(id)
    }

    render() {
        return(
            <div>{this.props.friends.map(friend => 
                <div className="friend" id={friend.id}>
                    <h4>{friend.name}</h4>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                    <button onClick={() => this.deleteFriend(friend.id)}>Delete Friend</button>
                    <button>Update Friend</button>
                </div>
                )}</div>
        );
    }
}

const mapStateToProps = state => ({
    friends: state.friends
})

export default connect(mapStateToProps,{getFriends, deleteFriend})(Friends);