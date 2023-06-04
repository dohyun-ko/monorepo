import React from "react";

const CounterMixin = {
  incrementCount() {
    this.setState({
      count: this.state.count + 1,
    });
  },
  decrementCount() {
    this.setState({
      count: this.state.count - 1,
    });
  },
};

const Counter = React.createClass({
  mixins: [CounterMixin],
  getInitialState: function () {
    return { count: 0 };
  },
  render: function () {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  },
});

ReactDOM.render(<Counter />, document.getElementById("container"));
