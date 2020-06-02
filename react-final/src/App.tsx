import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {ListCoin} from "./components/home/home-page";

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to={ListCoin}>Home</Link>
                    </li>
                    <li>
                        <Link to='/coin/:id'>Detail</Link>
                    </li>
                </ul>
            </div>

            <Route path='/coin/:id' exact component={}/>
        </Router>
    );
}

export default App;
