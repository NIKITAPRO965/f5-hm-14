
import { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Modal from "./components/Modal/Modal";
import { fetchImages } from "./appi";
import "./App.css";

class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    loading: false,
    selectedImage: null,
    error: "",
  };

  componentDidUpdate(_, prevState) {
    const queryChanged = prevState.query !== this.state.query;
    const pageChanged = prevState.page !== this.state.page;

    if (queryChanged || pageChanged) {
      this.loadImg();
    }
  }

  loadImg = async () => {
    const { query, page } = this.state;

    if (!query.trim()) return;

    this.setState({ loading: true, error: "" });

    try {
      const data = await fetchImages(query, page);

      this.setState((prevState) => {
        const newImages =
          page === 1
            ? data.hits
            : [...prevState.images, ...data.hits];

        const uniqueImages = Array.from(
          new Map(newImages.map((img) => [img.id, img])).values()
        );

        return {
          images: uniqueImages,
        };
      });
    } catch (error) {
      this.setState({
        error: "Не вдалося завантажити зображення.",
      });
      console.error(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSearch = (query) => {
    const normalizedQuery = query.trim();

    if (!normalizedQuery) return;

    if (normalizedQuery === this.state.query) {
      this.setState({
        page: 1,
        images: [],
      });
      return;
    }

    this.setState({
      query: normalizedQuery,
      images: [],
      page: 1,
      error: "",
    });
  };

  loadMore = () => {
    if (!this.state.loading) {
      this.setState((prevState) => ({
        page: prevState.page + 1,
      }));
    }
  };

  openModal = (image) => {
    this.setState({ selectedImage: image });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const {
      images,
      loading,
      selectedImage,
      error,
    } = this.state;

    return (
      <>
        <Searchbar onSearch={this.handleSearch} />

        {error && <p>{error}</p>}

        <ImageGallery
          imgs={images}
          onImageClick={this.openModal}
        />

        {loading && <Loader />}

        {images.length > 0 && !loading && (
          <Button onClick={this.loadMore} />
        )}

        {selectedImage && (
          <Modal
            image={selectedImage}
            onClose={this.closeModal}
          />
        )}
      </>
    );
  }
}

export default App;
