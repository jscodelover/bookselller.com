import React from 'react';
import { Route } from 'react-router-dom';

import LoginPage from './components/EntryPage';
import Home from './container/Home';

export default function App(){
    return (
        <div>
            <Route path="/bookseller" component={LoginPage} />
            <Route path="/home" component={Home} />
        </div>    
    );
}

