// eslint-disable-next-line
import React from 'react';
import { Switch, Route } from "react-router-dom";
import WebUserRegistrationS1 from "./WebUserRegistrationS1";
import WebUserRegistrationS2 from "./WebUserRegistrationS2";

const Main = () => (
    <Switch>
        <Route exact path="/" component={WebUserRegistrationS1} />
        <Route path="/WebUserRegistrationS2" component={WebUserRegistrationS2} />
    </Switch>
)

export default Main;