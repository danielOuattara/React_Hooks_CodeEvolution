import React, { Component } from 'react'

export default class CounterClassPreviousState extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0             
        }
        this.handleCounterIncrement = this.handleCounterIncrement.bind(this)
        this.handleCounterIncrementBy5 = this.handleCounterIncrementBy5.bind(this)
        this.handleCounterDecrementBy3 = this.handleCounterDecrementBy3.bind(this)
    }

    handleCounterIncrement() {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    
    handleCounterIncrementBy5() {
        this.setState(() => {
            return {
                counter: this.state.counter + 5
            }
        })
    }

    handleCounterDecrementBy3() {
        this.setState((previousState) => {
            return {
                counter: previousState.counter -3
            }
        })
    }
    
    render() {
        return (
            <div>
                <h2>{this.state.counter}</h2>
                <button onClick={this.handleCounterIncrement}> Increment: </button>
                <button onClick={this.handleCounterIncrementBy5}> Increment By 5: </button>
                <button onClick={this.handleCounterDecrementBy3}> Decrement By 3: </button>
            </div>
        );
    }
}
