import React from 'react';
import { Link } from 'react-router-dom';
import './Colorchip.scss';

class Colorchip extends React.Component {
  render() {
    const { color } = this.props;
    return (
      <Link to="#">
        <div className={color}></div>
      </Link>
    );
  }
}

export default Colorchip;