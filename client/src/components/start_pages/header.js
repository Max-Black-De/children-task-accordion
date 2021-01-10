import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import "./start.css";
import star from '../images/star.svg'
class Header extends Component {
    render() {
    return (
        <div className="wraper">
            <h1>Children task</h1>
            <div className="main">
                <div className="status">
                    <div className="create"><NavLink to="/create-task">Create</NavLink></div>
                    <div className="home"><NavLink to="/">Home</NavLink></div>
                    <div className="get"><NavLink to="/get-task">Get task</NavLink></div>
                </div>
            </div>
        </div>
    );
    }
}
export default Header;
