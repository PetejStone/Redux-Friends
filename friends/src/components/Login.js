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
            <div className="login">
            <h1>Please Login</h1>
                <form className="login-form">
                    <input type="text" required/>
                    <input type="password" required />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     loading: state.loading
// }


export default Login;