import React, {Component}from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CreateTask from './components/admin/create-task';
import "./App.css";
import GetTask from './components/user/get-task';
import Header from './components/start_pages/header';
import Body from './components/start_pages/body';

class App extends Component {
    render() {
        return (
            <div className="background">
                <Header />
                {/* <Route path='home' component={Body} /> */}
                <Route path='/create-task' component={CreateTask} />
                <Route path='/get-task'component={GetTask} />
            </div>
    );
    }
}

export default App;