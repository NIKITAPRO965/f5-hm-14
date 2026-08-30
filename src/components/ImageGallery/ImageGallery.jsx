import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { Component } from "react";

class ImageGallery extends Component {
  render() {
    return (
      <ul>
        {this.props.imgs.map((imag) => {
          return <ImageGalleryItem key={imag.id} img={imag} />;
        })}
      </ul>
    );
  }
}

export default ImageGallery;
