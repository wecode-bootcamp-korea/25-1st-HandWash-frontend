import React from 'react';
import { Link } from 'react-router-dom';
import './StyleRecommend.scss';

class StyleRecommend extends React.Component {
  render() {
    const styleContent = [
      {
        id: 1,
        url: 'https://lp2.hm.com/hmgoepprod?set=source[/21/32/21321c2f8521316f5775d75c54f2edb7420be33a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
        name: '코튼 스웨트 셔츠',
        price: '39,900',
        is_new: 0,
      },
      {
        id: 2,
        url: 'https://lp2.hm.com/hmgoepprod?set=source[/21/32/21321c2f8521316f5775d75c54f2edb7420be33a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
        name: '코튼 스웨트 셔츠',
        price: '39,900',
        is_new: 0,
      },
      {
        id: 3,
        url: 'https://lp2.hm.com/hmgoepprod?set=source[/21/32/21321c2f8521316f5775d75c54f2edb7420be33a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
        name: '코튼 스웨트 셔츠',
        price: '39,900',
        is_new: 0,
      },
      {
        id: 4,
        url: 'https://lp2.hm.com/hmgoepprod?set=source[/21/32/21321c2f8521316f5775d75c54f2edb7420be33a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
        name: '코튼 스웨트 셔츠',
        price: '39,900',
        is_new: 0,
      },
    ];

    return (
      <article className="styleRecommend">
        <div>
          <p>스타일</p>
        </div>
        <ul className="styleBox">
          {styleContent.map(content => (
            <li className="styleContent" key={content.id}>
              <div className="box">
                <img alt="styleImg" src={content.url} />
                <i className="fas fa-heart" />
              </div>
              <span className="blank">blank staples</span>
              <Link to="#" className="link">
                {content.name}
              </Link>
              <span>₩ {content.price}</span>
            </li>
          ))}
        </ul>
      </article>
    );
  }
}

export default StyleRecommend;