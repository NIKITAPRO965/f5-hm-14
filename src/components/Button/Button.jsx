
import { Component } from "react";
import styles from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <button
        className={styles.button}
        onClick={this.props.onClick}
        type="button"
      >
        Load more
      </button>
    );
  }
}

export default Button;
