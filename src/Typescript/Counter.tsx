import React, { Component } from "react";

// Step 1: Define an interface for the state
interface CounterState {
  count: number; // The state has a `count` property of type `number`
}

// Step 2: Define the class component with State and an empty object for Props
class Counter extends Component<{}, CounterState> {
  // Step 3: Initialize state with the correct type
  state: CounterState = {
    count: 0,
  };

  // Step 4: Method to increment the count
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Step 5: Render method returns JSX
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
