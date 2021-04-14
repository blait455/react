import React, { Component } from "react";


class Counter extends Component {
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200'
    };
    styles = {
        fontSize: 30,
    }
    render(){
        return(
            <React.Fragment>
                <img src={ this.state.imageUrl} alt=""/>
                <span style={this.styles} className="badge badge-primary m-2">{ this.change() }</span>
                <button className="btn btn-primary">Increment</button>    
            </React.Fragment>
        )
    }
    change(){
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}

export default Counter;