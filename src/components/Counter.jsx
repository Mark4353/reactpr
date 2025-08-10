import { Component } from "react";
export class Counter extends Component {
  // constructor(x,y) {
  // this.x = x;
  // this.y = y;
  // }

  state = {
    num: this.props.value || 0,
  };
  render() {
    console.log(this.props);
    return (
      <div>
    
        <h1>Counter: {this.state.num}</h1>
        <button onClick={() => this.setState({ num: this.state.num + 1 })}>
          click+
        </button>
                {/* <button onClick={() => this.setState({ num: this.state.num = 5 })}>
          click+
        </button> */}
        <button onClick={() => this.setState({ num: this.state.num - 1 })}>
          click-
        </button>
      </div>
    );

  }
}
