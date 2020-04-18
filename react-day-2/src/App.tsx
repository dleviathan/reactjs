import React from 'react';
import logo from './logo.svg';
import './App.css';
import {RatingBar} from "./components/ratings_bar/RatingBar";

class App extends React.Component<any, any> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <RatingBar/>
        );
    }
}

export default App;
