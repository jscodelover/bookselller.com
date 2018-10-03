import React from 'react';
import { Route } from 'react-router-dom';

import LoginPage from './container/LoginPage';

export default function App(){
    return (
        <Route exact path="/" component={LoginPage} />
    );
}

