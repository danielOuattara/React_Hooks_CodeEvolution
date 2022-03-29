import { Component } from "react";

export default class NameClassObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        newCountry: "",
        firstName: "",
        lastName: "",
      },
    };

    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleNewCountry = this.handleNewCountry.bind(this);
  }

  // handleFirstName(event) {
  //   return this.setState({...this.state.name, firstName: event.target.value });
  // }

  handleLastName(event) {
    return this.setState({...this.state.name, lastName: event.target.value });
  }

  handleNewCountry(event) {
    return this.setState({...this.state.name, country: event.target.value });
  }

  // handleFirstName = (event) => {
  //   this.setState({ firstName: event.target.value });
  // };

  // handleFirstName(event) {
  //   this.setState({ firstName: event.target.value });
  // }

  handleFirstName = (event) => {
    // OK !
    this.setState(() => {
      return { ...this.state.name, firstName: event.target.value };
    });
  };

  // handleFirstName(event) {
  //   // OK !
  //   this.setState({ ...this.state.name, firstName: event.target.value });
  // }

  // handleFirstName(event) {
  //   return this.setState(() => {
  //     return { ...this.state.name, firstName: event.target.value };
  //   });
  // }

  // handleLastName(event) {
  //   return this.setState(() => {
  //     return { ...this.state.name, lastName: event.target.value };
  //   });
  // }

  render() {
    console.log(this.state);
    return (
      <form /* onSubmit={""} */>
        <label htmlFor="">Firstname : &nbsp;</label>
        <input
          onChange={this.handleFirstName}
          type="text"
          value={this.state.name.country}
          placeholder="Enter your FirstName"
        />
        <h2>firstName is : {this.state.name.country}</h2>

        <label htmlFor="">LastName : &nbsp;</label>
        <input
          onChange={this.handleLastName}
          type="text"
          value={this.state.name.country}
          placeholder="Enter your LastName"
        />
        <h2>lastName is : {this.state.name.country}</h2>

        <label htmlFor="">Country : &nbsp;</label>
        <input
          onChange={this.handleNewCountry}
          type="text"
          value={this.state.name.country}
          placeholder="Enter your country"
        />
        <h2>country is : {this.state.name.country}</h2>
      </form>
    );
  }
}
