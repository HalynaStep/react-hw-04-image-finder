import { useEffect } from 'react';

export const Modal = ({ modalImage, toggleModal }) => {
  useEffect(() => {
    const onEscClick = e => {
      if (e.key === 'Escape') {
        toggleModal();
      }
    };
    document.addEventListener('keydown', onEscClick);
    return () => document.removeEventListener('keydown', onEscClick);
  }, [toggleModal]);

  return (
    <div className="overlay" onClick={() => toggleModal()}>
      <div className="modal">
        <img src={modalImage} alt="" />
      </div>
    </div>
  );
};
