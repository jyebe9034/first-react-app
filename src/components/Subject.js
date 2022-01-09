import { Component } from "react";

class Subject extends Component {
    render() {
        return (
        <header>
            <h1><a href="/">{this.props.title}</a></h1>
            {this.props.subTitle}
        </header>
        );
    }
}

export default Subject;