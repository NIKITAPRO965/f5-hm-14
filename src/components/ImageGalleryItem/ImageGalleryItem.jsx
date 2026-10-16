
import { Component } from "react";
import styles from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  handleClick = () => {
    this.props.onImageClick(this.props.img);
  };

  render() {
    const { img } = this.props;

    return (
      <li className={styles.item}>
        <img
          className={styles.image}
          src={img.webformatURL}
          alt={img.tags || ""}
          onClick={this.handleClick}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
