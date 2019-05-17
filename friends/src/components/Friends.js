import React from 'react';
import {getFriends} from '../actions';
import {connect} from 'react-redux';

class Friends extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        this.props.getFriends()
    }

    render() {
        return(
            <div>{this.props.friends.map(friend => 
                <div className="friend">
                    <h4>{friend.name}</h4>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
                )}</div>
        );
    }
}

const mapStateToProps = state => ({
    friends: state.friends
})

export default connect(mapStateToProps,{getFriends})(Friends);