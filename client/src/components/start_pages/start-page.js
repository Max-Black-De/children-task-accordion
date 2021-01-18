import React, { Component} from "react";
import { NavLink, Link, BrowserRouter } from 'react-router-dom';
import "./start-page.css";
import back from "../images/new.svg"
import TextField from '@material-ui/core/TextField';

class Main extends Component {

    render() {
    return (

        <div className="wraper">
            <h1 className="chnTsk" >Children task</h1>
            <div className="main">
                <div className="status">
                    <div className="create-square">
                        <NavLink className="texta" to="/create-task">
                            <p className="texta create">Create</p>
                        </NavLink>
                    </div>
                    <div className="get-square">
                        <NavLink className="texta" to="/get-task">
                            <p className="texta get">Get task</p>
                        </NavLink>
                    </div>
                </div>
                <div className="input-block">
                    <TextField
                    id="standart-basic"
                    label='Login:'
                    // onChange={(event) => {setInputMon(event.target.value)}}
                    ></TextField>
                    <TextField
                    id="standart-basic"
                    label='Password'
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
