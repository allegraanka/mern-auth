import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Landing extends Component {
    render() {
        return(
            <Router>
                <div className="container valign-wrapper" style={{ height: "75vh" }}>
                    <div className="row">
                        <div className="col s12 center-align">
                            <h4>
                                <b>Build</b> a <span style={{ fontFamily: "monospace" }}>MERN</span> app with authentication from scratch.
                            </h4>
                            <p className="flow-text grey-text text-darken-1">
                                Full-stack JavaScript application with user authentication using Passport and JWT
                            </p>
                            <br />
                            <div className="col s6">
                                <Link to="/register" style={{ width: "140px", borderRadius: "3px", letterSpacing: "1.5px" }} className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                                    Register
                                </Link>
                            </div>
                            <div className="col s6">
                                <Link to="/login" style={{ width: "140px", borderRadius: "3px", letterSpacing: "1.5px" }} className="btn btn-large btn-flat waves-effect white black-text">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Landing;