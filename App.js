// src/App.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SuspectRegistration from './components/SuspectRegistration';
import CrimeRecords from './components/CrimeRecords';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';

function App() {
    return (
        <div className="app">
            <Header />
            <div className="main-container">
                <Sidebar />
                <div className="content">
                    <Switch>
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/suspects" component={SuspectRegistration} />
                        <Route path="/cases" component={CrimeRecords} />
                        <Route path="/analytics" component={Analytics} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;
