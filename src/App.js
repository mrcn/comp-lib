import React, {Component} from 'react';
import './App.css';
import { Navbar } from "react-bulma-components/full";
// eslint-disable-next-line
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Main from './Routes';

// import WebUserRegistrationS1 from './WebUserRegistrationS1';
// import WebUserRegistrationS2 from './WebUserRegistrationS2';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar color="info">
                        Menu
                </Navbar>

                <Main>
                    {this.props.children}
                </Main>

            </div>
        );
    }
}



export default App;