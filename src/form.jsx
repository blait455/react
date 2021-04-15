import React, { Component } from "react";

class form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            username: '',
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({email: event.target.value});
    }

    changeHandler = e => {
        this.setState({
            [e.target.username]: e.target.value
        })
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        console.log('A form was submitted', this.state);
        event.preventDefault();    
    }
    render() {
        return(
            <>
                <center>
                    <div className='col-md-6'>
                        <form className='form-group'>
                            <input type="text" placeholder='name' value={this.state.name} className='form-control'
                            onChange={ e =>this.setState({
                                name:e.target.value
                            }) }/>
                            <input type="text" name='username' placeholder='username' value={this.state.username} className='form-control' onChange={ e => this.changeHandler(e) }/>
                            <input type="email" placeholder='email' value={this.state.email} className='form-control' onChange={this.handleChange}/>
                            <hr/>
                            <hr/>
                            <button className='btn btn-success' onClick={this.handleSubmit}>Submit</button>
                        </form>
                    </div>
                </center>
            </>
        )
    }
}

export default form;