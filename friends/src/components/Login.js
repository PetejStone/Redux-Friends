import React from 'react'
import { connect } from 'react-redux';
import { login } from '../actions';

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

    handleChange = e => {
        console.log(e.target.value)
        this.setState({
            credentials: {
                ...this.state.credentials,
            [e.target.name] : e.target.value
            }
        })
    }

    loggingIn = e => {
        e.preventDefault();
        console.log(this.state.credentials)
    }
    render() {
        return(
            <div className="login">
            <h1>Please Login</h1>
                <form className="login-form" onSubmit={this.loggingIn}>
                    <input onChange={this.handleChange} value={this.state.credentials.username} name="username" type="text" required />
                    <input onChange={this.handleChange} type="password" value={this.state.credentials.password} name="password" required />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.loading
});


export default connect(mapStateToProps,{login})(Login);