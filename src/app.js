import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    // Link,
} from 'react-router-dom';
import counters from "./components/counters";
import Nav from './components/nav';
import userData from "./components/userData";

class app extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Auth: false,
        };
        const prop = props;
    }

    render() {
        const PrivateRoute = ({component:Component, ...rest}) => {
            <Route {...rest} render={ (props) => (
                this.state.Auth  === true ? 
                <Component {...rest}/> : 
                <Redirect to='/' />
            ) }/>
        }
        return (
            <React.Fragment>
                <Router>
                    <Nav/>
                    <Switch>
                        <Route exact path='/' component={counters}/>
                        <PrivateRoute exact path="/user" component={userData}/>
                        <Route path="*" render={() => <h1>404</h1>}/>
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

export default app