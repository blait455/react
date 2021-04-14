import React, { Component } from "react";
import Counter from './counter';

class counters extends Component {
    state = {
        counters: [
            {id:1, value:0},
            {id:2, value:3},
            {id:3, value:0},
            {id:4, value:0},
            {id:5, value:0}
        ]
    }
    render() {
        return(
            <div>
                {this.state.counters.map(counters => 
                    <Counter key={counters.id} value={counters.value} counid={counters.id}>
                        <h3>Tiitle</h3>
                    </Counter>    
                )}
            </div>
        );
    }
}

export default counters;