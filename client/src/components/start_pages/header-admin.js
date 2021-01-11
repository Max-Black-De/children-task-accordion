import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import "./start.css";
class HeadMin extends Component {
    render() {
    return (
        <div className="wraper">
            <h1>Children task</h1>
            <div className="main">
                <div className="status-head">
                    <div className="home"><NavLink to="/">Home</NavLink></div>
                    <div className="create"><NavLink to="/create-task">Create</NavLink></div>
                </div>
            </div>
        </div>
    );
    }
}
export default HeadMin;
