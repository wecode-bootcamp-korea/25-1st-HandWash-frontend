import React from 'react';
import './SizeModal.scss';
class SizeModal extends React.Component {
  render() {
    const { product, closeModal } = this.props;
    return (
      <section className="sizeBox">
        <div className="sizeModal">
          <div className="sizeGuide">
            <button className="guideButton">
              <span>사이즈 가이드</span>
            </button>
            <button className="close" onClick={closeModal}>
              <div></div>
            </button>
          </div>
          <div className="sizeTitle">
            <span>사이즈 선택</span>
            <i className="fas fa-angle-up"></i>
          </div>
          <ul className="sizeContent" onClick={closeModal}>
            {product.size?.map(content => (
              <li key={content}>
                <button>
                  <span>{content}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default SizeModal;
