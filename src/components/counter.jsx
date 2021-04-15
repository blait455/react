import React, { Component } from "react";


class Counter extends Component {
    state = {
        count: this.props.value,
        imageUrl: 'https://picsum.photos/200',
        tags: ['house', 'cars', 'boats']
    };
    styles = {
        fontSize: 30,
    };

    componentDidUpdate(prevProps, prevState) {
        console.log('prevState', prevState);
        console.log('prevProps', prevProps);
    }

    componentWillUnmount() {
        console.log('counter unMount');
    }

    render(){
        console.log('props', this.props)
        return(
            <React.Fragment>
                {this.props.children} @ {this.props.counid}
                <img src={ this.state.imageUrl} alt=""/>
                <span style={this.styles} className={this.getClass()}>{ this.change() }</span>
                <button onClick={this.handleIncrement} className="btn btn-primary">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counid)} className="btn btn-danger btn-sm m-2">Delete</button>

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