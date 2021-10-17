import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import PrivacyPage from "../pages/PrivacyPage/PrivacyPage";
import TermsPage from "../pages/TermsPage/TermsPage";
import RefundPage from "../pages/RefundPage/RefundPage";
import ContactPage from "../pages/ContactPage/ContactPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()} />}/>
                    <Route exact path="/about" render={(props) => <AboutPage {...props} key={Date.now()} />}/>
                    <Route exact path="/privacy" render={(props) => <PrivacyPage {...props} key={Date.now()} />}/>
                    <Route exact path="/terms" render={(props) => <TermsPage {...props} key={Date.now()} />}/>
                    <Route exact path="/refund" render={(props) => <RefundPage {...props} key={Date.now()} />}/>
                    <Route exact path="/contact" render={(props) => <ContactPage {...props} key={Date.now()} />}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;