import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export default class ClassUseStateArray extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: [],
      persons: [],
    };
  }

//   handleAddNumber = () => { // OK!
//     this.setState({
//       ...this.state,
//       numbers: [
//         ...this.state.numbers,
//         {
//           value: Math.floor(Math.random() * 100 + 1),
//           id: uuidv4(),
//           id_simple: this.state.numbers.length,
//         },
//       ],
//     });
//   };

    handleAddNumber = () => {  // OK!
      this.setState(() => {
        return {
          ...this.state,
          numbers: [
            ...this.state.numbers,
            {
              value: Math.floor(Math.random() * 100 + 1),
              id: uuidv4(),
              id_simple: this.state.numbers.length,
            },
          ],
        };
      });
    };

  render() {
    return (
      <div>
        <button onClick={this.handleAddNumber}>Add Number to numbers[]</button>
        <ul>
          {this.state.numbers.map((item) => (
            <li key={item.id}>
              {" "}
              {item.value} | {item.id} | {item.id_simple}{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
