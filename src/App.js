import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from './module/components/EntryPage';
import Home from './container/Home';

export default function App(){
    return (
        <Switch>
            <Route path="/bookseller" component={LoginPage} />
            <Route path="/home" component={Home} />
        </Switch>    
    );
}

