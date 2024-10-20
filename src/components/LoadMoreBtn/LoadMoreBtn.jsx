import css from './LoadMoreBtn.module.css';
import { IoArrowRedoOutline } from 'react-icons/io5';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={onClick}>
      Load more
      <IoArrowRedoOutline />
    </button>
  );
};

export default LoadMoreBtn;
