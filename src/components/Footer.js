import { Component } from "react";

export default class Header extends Component {
    constructor() {
        super();
        this.title = "Footer"
    }
    render() {
        return (
            <div className="footer">
                <span>Footer</span>
            </div>
        )
    }
}