import React, { Component } from "react";

class ClassTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState((prevState) => ({ timer: prevState.timer + 1 }));
//     }, 1000);
//   }

  startTimer = () => {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 100);
  };

  resetTimer = () => {
    this.setState(() => ({ timer: 0 }));
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        ClassTimer: {this.state.timer}
        <button onClick={this.startTimer}>Start Timer</button>
        <button onClick={() => clearInterval(this.interval)}>
          Clear Timer
        </button>
        <button onClick={this.resetTimer}>Reset Timer</button>
      </div>
    );
  }
}

export default ClassTimer;
