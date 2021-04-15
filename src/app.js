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
import form from "./form";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Auth: true,
        };
        console.log('App - constructor');
    }

    componentDidMount() {
        // ajax call 
        console.log('App - Mounted');
    }

    render() {
        console.log('App - rendering')
        const PrivateRoute = ({component:Component, ...rest}) => (
            <Route {...rest} render={ (props) => (
                this.state.Auth  === true ? 
                <Component {...rest}/> : 
                <Redirect to='/any' />
            ) }/>
        )
        return (
            <React.Fragment>
                <Router>
                    <Nav/>
                    <Switch>
                        <Route exact path='/' component={counters}/>
                        <Route path='/form' component={form}/>
                        <PrivateRoute exact path="/user" component={userData}/>
                        <Route path="*" render={() => <h1>404</h1>}/>
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

export default App