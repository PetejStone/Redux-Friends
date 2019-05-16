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
            <div>{console.log(this.props.friends)}</div>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friends
})

export default connect(mapStateToProps,{getFriends})(Friends);