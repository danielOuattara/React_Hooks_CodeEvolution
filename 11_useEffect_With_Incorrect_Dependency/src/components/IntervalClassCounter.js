import { Component } from "react";

export default class IntervalClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  ticTac = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  };
  
  componentDidMount() {
    this.interval = setInterval(this.ticTac, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <h1> Time : {this.state.count}</h1>;
  }
}
