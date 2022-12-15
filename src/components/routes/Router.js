import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from '../Login';
import Signup from '../Signup';

function Router(props) {
    return (
        <div>
            <HashRouter>
                <Switch>
                  <Route exact path="/" component = {Login}/>
                  <Route path="/signup" component = {Signup}/>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default Router;