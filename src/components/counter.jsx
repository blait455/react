import React, { Component } from "react";


class Counter extends Component {
    state = {
        count: 2
    };
    render(){
        return(
            <React.Fragment>
                <h1>Counter component</h1>
                <span>{ this.change() }</span><br/>
                <button>Increment</button>    
            </React.Fragment>
        )
    }
    change(){
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}

export default Counter;