import React, {Component} from 'react'
import Button from "../../atoms/button/Button";

// State component. Use this class to set state components.
class Counter extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }
    }

    setCountPlus() {
        this.setState({
            count: this.state.count + 1
        })
    }

    setCountMinus() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <>
                <p>I am the Count, and I love to count. {this.state.count} Ha ha ha ha ha!</p>
                <Button onClick={() => this.setCountPlus()}>Add one</Button>
                <Button onClick={() => this.setCountMinus()}>Subtract one</Button>
            </>
        )
    }
}

export default Counter