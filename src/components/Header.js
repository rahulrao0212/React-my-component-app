import { Component } from "react";

export default class Header extends Component {
    constructor() {
        super();
        this.title = "Header"
    }
    render() {
        return (
            <div className="App-header">
                <span>{this.title}</span>
                <hr />
            </div>
        )
    }
}