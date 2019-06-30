import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            username: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        console.log(newUser);
    };

    render() {
        const { errors } = this.state; // object destructuring for const errors = this.state.errors;

        return(
            <Router>
                <div className="container">
                    <div className="row">
                        <div className="col s8 offset-s2">
                            <Link to="/" className="btn-flat waves-effect">
                                <i className="material-icons left">keyboard_backspace</i>
                                Home
                            </Link>
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <h4> <b>Register </b> below. </h4>
                                <p className="grey-text text-darken-1">Already have an account? <Link to="/login">Login</Link></p>
                            </div>

                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.name}
                                        error={errors.name}
                                        placeholder="Full Name"
                                        id="name"
                                        type="text"
                                    />
                                </div>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.username}
                                        error={errors.username}
                                        placeholder="Username / Handle"
                                        id="username"
                                        type="text"
                                    />
                                </div>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        error={errors.email}
                                        placeholder="Email"
                                        id="email"
                                        type="email"
                                    />
                                </div>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.password}
                                        error={errors.password}
                                        placeholder="Enter Password"
                                        id="password"
                                        type="password"
                                    />
                                </div>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.password2}
                                        error={errors.password2}
                                        placeholder="Confirm Password"
                                        id="password2"
                                        type="password2"
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
                                        Register
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

export default Register;