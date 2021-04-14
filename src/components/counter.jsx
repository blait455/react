import React, { Component } from "react";


class Counter extends Component {
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200',
        tags: ['house', 'cars', 'boats']
    };
    styles = {
        fontSize: 30,
    }

    render(){
        return(
            <React.Fragment>
                <img src={ this.state.imageUrl} alt=""/>
                <span style={this.styles} className={this.getClass()}>{ this.change() }</span>
                <button onClick={this.handleIncrement} className="btn btn-primary">Increment</button>

                {this.state.tags.length === 0 ? <p>There are no tags</p> : <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>}
                {/* {this.renderTags()} */}
                {/* <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul> */}
            </React.Fragment>
        )
    }
    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    renderTags(){
        if (this.state.tags.length === 0) return <p>'there are no tags'</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
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