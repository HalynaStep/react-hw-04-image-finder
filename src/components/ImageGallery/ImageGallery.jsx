import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, toggleModal }) => (
  <ul className="imageGallery">
    {images.map(image => {
      return (
        <ImageGalleryItem
          key={image.id}
          largeImageURL={image.largeImageURL}
          webformatURL={image.webformatURL}
          toggleModal={toggleModal}
        />
      );
    })}
  </ul>
);
