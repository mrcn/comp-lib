import React, { Component } from 'react';
// eslint-disable-next-line
import { Columns, Section, Level, Form, Heading, Hero } from "react-bulma-components/full";
// eslint-disable-next-line
import { BrowserRouter, Route, Link } from 'react-router-dom';

class WebUserRegistrationS2 extends Component {
    render() {
        return (
            <Section>
                <Hero>
                    <Heading size={1}>Personal Information - Screen 2</Heading> 
                </Hero>
            
                <Columns></Columns>

                <Section>
                    <Columns>
                        <Columns.Column size="one-third" offset="one-third">
                            <Level>
                                <Link to="/">Save & Back</Link>
                                <p>Exit</p>
                                <Link to="/">Save & Next</Link>
                            </Level>
                        </Columns.Column>
                    </Columns>
                </Section>
            </Section>
        )
    }
}

export default WebUserRegistrationS2;