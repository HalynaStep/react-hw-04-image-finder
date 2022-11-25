import { FetchImages } from 'helpers/finderApi';
import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  useEffect(() => {
    setIsLoading(true);
    FetchImages(query, page)
      .then(images => {
        if (query === '') {
          setImages([]);
          return;
        }
        setImages(prev => (page === 1 ? images : [...prev, ...images]));
      })

      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [query, page]);

  const onSubmit = e => {
    const inputValue = e.target.elements.query.value;
    e.preventDefault();
    setQuery(inputValue);
    if (inputValue === '') {
      alert('Введите название');
      return;
    }
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const toggleModal = image => {
    if (image) {
      setIsModalOpen(true);
      setModalImage(image);
      return;
    }

    setIsModalOpen(false);
    setModalImage('');
  };

  return (
    <div className="app">
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery images={images} toggleModal={toggleModal} />
      {isLoading && <Loader />}
      {!!images.length && !isLoading && (
        <Button handleLoadMore={handleLoadMore}></Button>
      )}
      {isModalOpen && (
        <Modal modalImage={modalImage} toggleModal={toggleModal} />
      )}
    </div>
  );
}
