import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            errors: {}
        }
    };

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(userData);
    }

    render() {
        const { errors } = this.state;

        return(
            <Router>
                <div className="container">
                    <div style={{ marginTop: "4rem" }} className="row">
                        <div className="col s8 offset-s2">
                            <Link to="/" className="btn-flat waves-effect">
                                <i className="material-icons left">keyboard_backspace</i>
                                Home
                            </Link>
                            <div style={{ paddingLeft: "11.250px" }} className="col s12">
                                <h4><b>Login </b>below.</h4>
                                <p className="grey-text text-darken-1">Don't have an account? <Link to="/register">Register </Link>here.</p>
                            </div>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.username}
                                        error={errors.username}
                                        placeholder="Enter your username."
                                        id="username"
                                        type="text"
                                    />
                                </div>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.password}
                                        error={errors.password}
                                        placeholder="Enter your password."
                                        id="password"
                                        type="password"
                                    />
                                </div>
                                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                    <button
                                        style={{
                                            width: "150px",
                                            borderRadius: "3px",
                                            letterSpacing: "1.5px",
                                            marginTop: "1rem"
                                        }}
                                        type="submit"
                                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Login;