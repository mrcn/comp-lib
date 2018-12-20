import React, { Component } from 'react';
import { Columns, Section, Level, Form, Heading } from "react-bulma-components/full";
// eslint-disable-next-line
import { BrowserRouter, Route, Link } from 'react-router-dom';
// eslint-disable-next-line
import Routes from './Routes';

class WebUserRegistrationS1 extends Component {
    render() {
        return (
            <Section>
                <Heading size={1}>Account Registration - Screen 1</Heading> 

                <Columns>
                    <Columns.Column size="one-third" offset="one-third">
                        <Form.Field>
                            <Form.Label align="left">Preferred Language</Form.Label>
                            <Form.Control>
                                <Form.Input />
                            </Form.Control>
                        </Form.Field>
                        <Form.Field>
                            <Form.Label align="left">Username</Form.Label>
                            <Form.Control>
                                <Form.Input />
                            </Form.Control>
                        </Form.Field>
                        <Form.Field>
                            <Form.Label align="left">Password</Form.Label>
                            <Form.Control>
                                <Form.Input />
                            </Form.Control>
                        </Form.Field>
                        <Form.Field>
                            <Form.Label align="left">Confirm Password</Form.Label>
                            <Form.Control>
                                <Form.Input />
                            </Form.Control>
                        </Form.Field>
                        <Form.Field>
                            <Form.Label align="left">Family Name</Form.Label>
                            <Form.Control>
                                <Form.Input />
                            </Form.Control>
                        </Form.Field>
                        <Form.Label align="left">Date of Birth</Form.Label>
                        <Form.Field>
                            <Level.Side>
                                <Level.Item>
                                    <Form.Control>
                                        <Form.Select>
                                            <option>
                                                Months
                                                </option>
                                            <option>
                                                ...
                                                </option>
                                            <option>
                                                ...
                                                </option>
                                        </Form.Select>
                                    </Form.Control>
                                </Level.Item>
                                <Level.Item>
                                    <Form.Control>
                                        <Form.Select>
                                            <option>
                                                Days
                                                </option>
                                            <option>
                                                ...
                                                </option>
                                            <option>
                                                ...
                                                </option>
                                        </Form.Select>
                                    </Form.Control>
                                </Level.Item>
                                <Level.Item>
                                    <Form.Control>
                                        <Form.Select>
                                            <option>
                                                Years
                                                </option>
                                            <option>
                                                ...
                                                </option>
                                            <option>
                                                ...
                                                </option>
                                        </Form.Select>
                                    </Form.Control>
                                </Level.Item>
                            </Level.Side>
                        </Form.Field>
                    </Columns.Column>
                </Columns>
        
                <Section>
                    <Columns>
                        <Columns.Column size="one-third" offset="one-third">
                            <Level>
                                <Link to="/">Save & Back</Link>
                                <p>Exit</p>
                                <Link to="/WebUserRegistrationS2">Save & Next</Link>
                            </Level>
                        </Columns.Column>
                    </Columns>
                </Section>
            </Section>
        )
    }
}

export default WebUserRegistrationS1;