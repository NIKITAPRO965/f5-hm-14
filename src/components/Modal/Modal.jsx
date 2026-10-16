
import { Component } from "react";
import styles from "./Modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    document.body.style.overflow = "";
  }

  handleKeyDown = (event) => {
    if (event.key === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { image } = this.props;

    return (
      <div
        className={styles.overlay}
        onClick={this.handleBackdropClick}
      >
        <div className={styles.modal}>
          <img
            src={image.largeImageURL}
            alt={image.tags || ""}
          />
        </div>
      </div>
    );
  }
}

export default Modal;
