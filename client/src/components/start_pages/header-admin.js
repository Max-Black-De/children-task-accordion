import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import "./headers.css";
class HeadMin extends Component {
    render() {
    return (
        <div className="wraper">
            <h1 className="chnTsk">Children task</h1>
            <div className="main">
                <div className="status-head">
                    <div className="home-header"><NavLink className="home" to="/">Home</NavLink></div>
                    <div className="create-header"><NavLink className="create" to="/create-task">Create</NavLink></div>
                </div>
            </div>
        </div>
    );
    }
}
export default HeadMin;
