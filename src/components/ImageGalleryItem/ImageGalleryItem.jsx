import { Component } from "react";

class ImageGalleryItem extends Component {
  render() {
    const { img } = this.props;
    return (
      <li>
        <img src={img.webformatURL} alt="" />
      </li>
    );
  }
}

export default ImageGalleryItem;
