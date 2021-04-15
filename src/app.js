import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link,
    // Redirect
} from 'react-router-dom';
import counters from "./components/counters";
import Nav from './components/nav';
import userData from "./components/userData";

class app extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <Nav/>
                <Router>
                    <Switch>
                        <Route exact path='/' component={counters}/>
                        <Route exact path="/user" component={userData}/>
                        <Route path="*" render={() => <h1>404</h1>}/>
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

export default app