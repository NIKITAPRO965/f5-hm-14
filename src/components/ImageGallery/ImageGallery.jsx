
import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

class ImageGallery extends Component {
  render() {
    const { imgs, onImageClick } = this.props;

    return (
      <ul className={styles.gallery}>
        {imgs.map((img) => (
          <ImageGalleryItem
            key={img.id}
            img={img}
            onImageClick={onImageClick}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
