import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  onChangePassword(e) {
    const password_ = e.currentTarget.value;
    this.setState({
      password: password_,
    });
  }

  onChangeUsername(e) {
    const username_ = e.currentTarget.value;

    this.setState({
      username: username_,
    });
  }

  onChangeTxt(e, field_name) {
    const obj = {};
    obj[field_name] = e.currentTarget.value;
    this.setState(obj);
  }

  onClickLogin(e) {
    alert(
      'Login Successfully!!! \n' +
        'user_name: ' +
        this.state.username +
        '\npassword:' +
        this.state.password
    );
  }
  render() {
    return (
      <>
        <h2>User name </h2>
        <input
          type="text"
          value={this.state.username}
          onChange={(e) => this.onChangeTxt(e, 'username')}
        />
        <h2> Password </h2>
        <input
          type="text"
          value={this.state.password}
          onChange={(e) => this.onChangeTxt(e, 'password')}
        />
        <h2 />
        <button title="Login" onClick={(e) => this.onClickLogin(e)}>
          {' '}
          Login{' '}
        </button>
      </>
    );
  }
}

export default Login;
