

import { Component } from "react";


class Button extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.onClick} type="button">load more</button>
      </>
    );
  }
}

export default Button;