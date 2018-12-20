import React, {Component} from 'react';
import './App.css';
import WebUserRegistrationScreen1 from './WebUserRegistration.js';
// import {Box} from "react-bulma-components/full";
import { Button, Columns, Section, Level } from "react-bulma-components/full";
import { Navbar } from "react-bulma-components/full";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar color="info">
                        Menu
                </Navbar>
                <WebUserRegistrationScreen1/>
                <Section>
                    <Columns>
                        <Columns.Column size="one-third" offset="one-third">
                            <Level>
                                <p style={{textDecoration: "underline"}}>Save & Back</p>
                                <p style={{textDecoration: "underline"}}>Exit</p>                                    
                                <Button>Save & Next</Button>
                            </Level>
                        </Columns.Column>
                    </Columns>
                </Section>
            </div>
        );
    }
}



export default App;