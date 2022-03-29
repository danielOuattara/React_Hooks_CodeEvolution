import React, { Component } from "react";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleCounterIncrement = this.handleCounterIncrement.bind(this);
  }

  //   handleCounterIncrement() {
  //     this.setState({
  //       counter: this.state.counter + 1,
  //     });
  //   }

  handleCounterIncrement() {
    this.setState(() => ({ counter: this.state.counter + 1 }));
  }

  //   handleCounterIncrement() {
  //       this.setState(() => {
  //           return {
  //               counter: this.state.counter + 1
  //           }
  //       })
  //   }

  render() {
    return (
      <div>
        <button onClick={this.handleCounterIncrement}>
          {" "}
          Increment class: {this.state.counter}
        </button>
      </div>
    );
  }
}
