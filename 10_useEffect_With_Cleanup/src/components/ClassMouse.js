import React, { Component } from 'react'
export default class ClassMouse extends Component {
    constructor(props) {
        super(props)
        this.state = {
             x: 0,
             y: 0
        }
    }

    logMousePosition = (event) => {
        console.log("mouse event class");
        this.setState({ x: event.clientX, y: event.clientY })
    }

    componentDidMount() {
        window.addEventListener("mousemove", this.logMousePosition);
    }

    componentWillUnmount() {
        window.removeEventListener("mousemove", this.logMousePosition)
    }

    render() {
        return (
            <div>
                <h2> X - {this.state.x}  Y - {this.state.y}</h2>
            </div>
        );
    }
}
