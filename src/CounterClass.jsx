import React, { Component } from 'react'

class CounterClass extends Component{
    state = {
        count: 1
    }
    Increment = ()=>{
        this.setState({count : this.state.count +1})
    }
    render(){
        return(
            <div>
                <h1>count - {this.state.count}</h1>
                <button onClick={this.Increment}>Increment</button>
            </div>
        )
    }
    
}
export default CounterClass