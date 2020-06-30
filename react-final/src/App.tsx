import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {ListCoin} from "./components/home/home-page";
import {Details} from "./components/detail/details";

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/coin/:id'>Detail</Link>
                    </li>
                </ul>
            </div>
            <Route path='/' exact component={ListCoin}/>
            <Route path='/coin/:id' exact component={Details}/>
        </Router>
    );
}

export default App;
