import React, { Component } from 'react'

export default class CounterClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            name: "",     
        }
        this.handleCounterIncrement = this.handleCounterIncrement.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.counter} times`;
    }
    componentDidUpdate( prevProps, prevState) {
        if(prevState.counter !== this.state.counter) {
            console.log("updating document : componentDidUpdate");
            document.title = `Clicked ${this.state.counter} times`;
        }
    }


    handleCounterIncrement() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    handleNameChange (event) {
        this.setState(() => {
            return {name: event.target.value }
        })
    }
    
    
    render() {
        return (
            <div>
                <button onClick={this.handleCounterIncrement}> Increment: {this.state.counter}</button>
                <input 
                  type='text' 
                  value= {this.state.name}
                  onChange={this.handleNameChange}
                />
            </div>
        );
    }
}
