import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onEscClick);
  }

  onEscClick = e => {
    if (e.key === 'Escape') {
      this.props.toggleModal();
    }
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscClick);
  }

  render() {
    const { modalImage, toggleModal } = this.props;
    return (
      <div className="overlay" onClick={() => toggleModal()}>
        <div className="modal">
          <img src={modalImage} alt="" />
        </div>
      </div>
    );
  }
}
