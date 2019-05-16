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
            <div>Friends</div>
        )
    }
}

export default connect(null,{getFriends})(Friends);