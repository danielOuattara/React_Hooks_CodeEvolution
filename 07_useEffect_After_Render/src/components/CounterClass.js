import React, { Component } from "react";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleCounterIncrement = this.handleCounterIncrement.bind(this);
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.counter} times`;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      document.title = `Clicked ${this.state.counter} times`;
    }
  }

  handleCounterIncrement() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleCounterIncrement}>
          {" "}
          Increment: {this.state.counter}
        </button>
      </div>
    );
  }
}
