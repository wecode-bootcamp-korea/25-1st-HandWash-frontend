import React from 'react';
import { Link } from 'react-router-dom';
import LoginInput from './LoginInput';
import API from '../../config';
import './LoginModal.scss';

class LoginModal extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  goToMain = () => {
    const { email, password } = this.state;
    fetch(API.signin, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.ACCESS_TOKEN) {
          localStorage.setItem('token', res.ACCESS_TOKEN);
          this.props.history.push('/');
        } else if (!res.ACCESS_TOKEN) {
          alert('아이디, 비밀번호를 확인해주세요');
        }
      });
  };

  logInCondition = e => {
    const { email, password } = this.state;
    if (email.includes('@') && password.length >= 8) {
      this.goToMain();
    }
  };

  render() {
    console.log(this.state.email, this.state.password);
    // const { email, password } = this.state;
    // const isValid = email.includes('@') && password.length >= 8;
    return (
      <div className="loginModal">
        <div className="loginContainer">
          <Link to="/" className="close">
            <button className="closeButton">
              <i className="fal fa-times"></i>
            </button>
          </Link>
          <p className="loginTitle">로그인</p>
          <p className="loginSubTitle">
            다양한 할인 혜택과 이벤트,보너스 쿠폰을 놓치지 마세요
          </p>
          <button className="kakaoLogin">
            <i className="fas fa-comment"></i> &nbsp;카카오로 로그인
          </button>
          <p className="or">또는</p>
          <LoginInput
            handleInput={this.handleInput}
            // className={isValid ? '' : 'inputOff'}
          />
          <div className="loginState">
            <div className="checkBox">
              <input type="checkbox" name="loginCheck" />
              <span className="loginStateCheck">로그인 상태 유지</span>
            </div>
            <span className="lostPassword">비밀번호를 잊으셨나요?</span>
          </div>
          <div className="mainButton">
            <button className="loginButton" onClick={this.logInCondition}>
              <p>로그인</p>
            </button>
            <Link to="/signup">
              <button className="goToSignUp">멤버십 가입하기</button>
            </Link>
          </div>
          <Link to="#" className="membership">
            멤버십 정보
          </Link>
        </div>
      </div>
    );
  }
}

export default LoginModal;
