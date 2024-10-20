import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, handleOpenModal }) => {
  return (
    <ul className={css.imagesContainer}>
      {images.map(image => {
        return (
          <li key={image.id} className={css.imagesItem}>
            <ImageCard imageData={image} handleOpenModal={handleOpenModal} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
