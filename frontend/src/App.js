import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from '../src/components/LogIn/LogIn.js'
import SignUp from '../src/components/Signup/signUp.js';
import Home from '../src/components/Home/home.js';




class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/login" exact component={() => <Login />} />
                    <Route path="/signup" exact component={() => <SignUp />} />

                </Router>
            </div>
        );
    }
}


export default App;