import React from 'react';
import FavoritesModal from './FavoritesModal/FavoritesModal';
import './FavoritesList.scss';

class FavoritesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSizeModal: false,
    };
  }

  handleSizeModal = () => {
    const { isSizeModal } = this.state;
    this.setState({
      isSizeModal: !isSizeModal,
    });
  };

  render() {
    const {
      product_id,
      image,
      is_conscious,
      name,
      price,
      is_new,
      color,
      sizes,
    } = this.props;

    const { isSizeModal } = this.state;
    // console.log(sizes);
    return (
      <li className="favoritcontent">
        <div
          className={isSizeModal ? 'black' : ''}
          onClick={this.closeModal}
        ></div>
        <div>
          <div className="delete">
            <img alt="listImg" src={image} />
            <i className="far fa-trash-alt"></i>
          </div>
          <div className="contentText">
            <span className="conscious">
              {is_conscious === true && 'Concious'}
            </span>
            <span>{name}</span>
            <span className="price">₩{price}</span>
            <span className="new">{is_new === true && '신제품'}</span>
            <div className="colorBox">
              <span className="color">컬러:</span>
              <span>{color}</span>
            </div>
            <button className="sizeBox" onClick={this.handleSizeModal}>
              {isSizeModal && (
                <FavoritesModal
                  handleSizeModal={this.handleSizeModal}
                  sizes={sizes}
                />
              )}
              <span className="sizeText">사이즈 선택</span>
              <i className="fas fa-angle-down"></i>
            </button>
            <button className="order">
              <span>담기</span>
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default FavoritesList;