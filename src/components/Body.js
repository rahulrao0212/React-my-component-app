import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Body extends Component {
    constructor() {
        super();
        this.title = "Body";
    }
    render() {
        return (
            <div className="container" style={{ paddingTop: "2%" }}>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Rahul G Rao</td>
                            <td>27</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}