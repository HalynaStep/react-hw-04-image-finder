export const ImageGalleryItem = ({
  largeImageURL,
  webformatURL,
  toggleModal,
}) => (
  <li className="imageGalleryItem">
    <img
      className="imageGalleryItem-image"
      src={webformatURL}
      alt=""
      data-source={largeImageURL}
      onClick={() => toggleModal(webformatURL)}
    />
  </li>
);
