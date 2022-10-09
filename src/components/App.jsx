import { FetchImages } from 'helpers/finderApi';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    isModalOpen: false,
    modalImage: '',
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      FetchImages(query, page)
        .then(images => {
          this.setState(prev => ({
            images: page === 1 ? images : [...prev.images, ...images],
          }));
        })
        .catch(error => console.log(error))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({ query: e.currentTarget.elements.query.value, page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  toggleModal = image => {
    if (image) {
      this.setState({ isModalOpen: true, modalImage: image });
      return;
    }
    this.setState({ isModalOpen: false, modalImage: '' });
  };

  render() {
    return (
      <div className="app">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          images={this.state.images}
          toggleModal={this.toggleModal}
        />
        {this.state.isLoading && <Loader />}
        {!!this.state.images.length && !this.state.isLoading && (
          <Button handleLoadMore={this.handleLoadMore}></Button>
        )}
        {this.state.isModalOpen && (
          <Modal
            modalImage={this.state.modalImage}
            toggleModal={this.toggleModal}
          />
        )}
      </div>
    );
  }
}
