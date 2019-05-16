import React from 'react'
import { connect } from 'tls';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    render() {
        return(
            <div></div>
        )
    }
}

const mapStateToProps = state => {
    loading: state.loading
}


export default connect(
    mapStateToProps,
    {}
)

(Login)