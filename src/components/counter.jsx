import React, { Component } from "react";


class Counter extends Component {
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3']
    };
    styles = {
        fontSize: 30,
    }
    render(){
        return(
            <React.Fragment>
                <img src={ this.state.imageUrl} alt=""/>
                <span style={this.styles} className={this.getClass()}>{ this.change() }</span>
                <button className="btn btn-primary">Increment</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </React.Fragment>
        )
    }
    getClass(){
        let classes = "badge m-2 badge-";
        classes += this.state.count ===0 ? "warning": "primary";
        return classes;
    }
    change(){
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}

export default Counter;