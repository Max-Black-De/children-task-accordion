import React, { Component} from "react";
import { NavLink, Link, BrowserRouter } from 'react-router-dom';
import "./start-page.css";
import back from "../images/new.svg"
import TextField from '@material-ui/core/TextField';

class Main extends Component {

    
    render() {
    return (

        


        <div className="wraper">
            <h1>Children task</h1>
            <div className="main">
                <div className="status">
                    <div className="create-square"><NavLink to="/create-task"><p className="texta">Create</p></NavLink></div>
                    <div className="get-square"><NavLink to="/get-task"><p className="texta">Get task</p></NavLink></div>
                </div>
                <div className="inpit-block">
                    <TextField
                    id="standart-basic"
                    label='Login:'
                    // value={inputMon}
                    // onChange={(event) => {setInputMon(event.target.value)}}
                    ></TextField>
                    <TextField
                    id="standart-basic"
                    label='Password'
                    // value={inputMon}
                    // onChange={(event) => {setInputMon(event.target.value)}}
                    ></TextField>
                </div>
                <div className='img'>
                    <img src={back} alt="back" ></img>
                </div>
            </div>
        </div>
    );
    }
}
export default Main;
