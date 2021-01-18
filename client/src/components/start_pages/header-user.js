import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import "./headers.css";

class HeadUser extends Component {
    render() {
    return (
        <div className="wraper">
            <h1 className="chnTsk">Children task</h1>
            <div className="main">
                <div className="status-head">
                    <div className="home-header"><NavLink className="home" to="/">Home</NavLink></div>
                    <div className="get-header"><NavLink className="get" to="/get-task">Get task</NavLink></div>
                </div>
            </div>
        </div>
    );
    }
}
export default HeadUser;