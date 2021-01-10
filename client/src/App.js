import React, {Component}from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CreateTask from './components/admin/create-task';
import "./App.css";
import GetTask from './components/user/get-task';
import Main from './components/start_pages/start-page';

class App extends Component {
    render() {
        return (
            <div className="main">
                <Route exact path='/' component={Main} />
                <Route path='/create-task' component={CreateTask} />
                <Route path='/get-task'component={GetTask} />
            </div>
    );
    }
}

export default App;