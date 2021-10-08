import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footerIcons">
          <a href="https://velog.io/@jetom" target="_blank">
            <i class="fas fa-dumbbell"></i>
          </a>
          <a href="https://velog.io/@jetom" target="_blank">
            <i class="fas fa-drumstick-bite"></i>
          </a>
          <a href="https://velog.io/@jetom" target="_blank">
            <i class="fas fa-paw"></i>
          </a>
          <a href="https://velog.io/@jetom" target="_blank">
            <i class="fas fa-laptop"></i>
          </a>
          <a href="https://velog.io/@jetom" target="_blank">
            <i class="fas fa-sun"></i>
          </a>
          <a href="https://velog.io/@jetom" target="_blank">
            <i class="fas fa-gamepad"></i>
          </a>
        </div>

        <section>
          <p>
            이 사이트는 H &#x0026; M 클론 코딩 사이트입니다. H &#x0026; W는
            2021년 이후부터 세계 개발 업계를 선도하는 탁월한 기업의 하나로
            성장하고싶습니다.
          </p>
          <Link to="/" className="footerLink more">
            더 보기
          </Link>
          <p>
            법인명 에이치앤더블유 주식회사 &#x007C; 통신판매업신고번호&#x003A;
            제 2021 서울선릉 1005호 &#x002F; 사업자등록번호&#x003A; 105 &#x002D;
            25 &#x002D; 10056 &#x007C; 대표자 전태양
          </p>
          <p>
            서울시 강남구 테헤란로 427 위워크 타워&#x0028;위워크 선릉
            2호점&#x0029;
          </p>
          <Link to="/" className="footerLink footerSocial">
            사업자 정보 확인
          </Link>
          <Link to="/" className="footerLink">
            지급보증안내
          </Link>
          <p className="logo">
            H <span className="samllLogo">&#x0026;</span> W
          </p>
          <Link to="/" className="footerLink">
            대한민국 &#x007C; &#x20A9;{' '}
          </Link>
        </section>
      </footer>
    );
  }
}

export default Footer;
