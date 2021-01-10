import React, { Component } from "react";
import { NavLink, Link, BrowserRouter } from 'react-router-dom';
import "./start-page.css";
class Main extends Component {
    render() {
    return (
        <div className="wraper">
            <h1>Children task</h1>
            <div className="main">
                <div className="status">
                    <div className="create-square"><NavLink to="/create-task">Create</NavLink></div>
                    <div className="home-square"><NavLink to="/">Home</NavLink></div>
                </div>
                <div className="status">
                    <div className="get-square"><NavLink to="/get-task">Get task</NavLink></div>
                    <div className="empty-square"></div>
                </div>
                <img src="../images/new.svg" alt="back" ></img>
            </div>
        </div>
    );
    }
}
export default Main;
